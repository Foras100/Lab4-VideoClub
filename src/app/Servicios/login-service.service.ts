import { Injectable } from '@angular/core';
import { Usuario} from '../Clases/usuario';

import { Observable } from 'rxjs';
//import { UsuarioI } from '../Interfaces/usuario-i';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pelicula } from '../Clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userActual: Usuario=null;
  userlogueado: boolean;
  adminlogueado: boolean;
  private administrador:Usuario = new Usuario ("administrador","","admin","admin",0,"");
  usuarios: Usuario[]=[];
  retornar:Usuario[]=[];
  usuariosObs: Observable<Usuario[]>
  host:string="http://localhost:3001/usuario"

  constructor(private http: HttpClient) {
    //console.log("constructor")
    this.userActual=JSON.parse(localStorage.getItem("usuario"))
    if(this.userActual!=null){
      if(this.userActual.usuario=="admin"){
        this.adminlogueado=true;
      }
      else{
        this.userlogueado=true;
      }
    }
    else{
      this.adminlogueado=false;
      this.userlogueado=false
    }
    this.getUsuarios();
    //console.log(this.usuariosObs)
  }
  setPeliActual(id:number){
    if(id==null){
      this.userActual.peliActual=null;
    this.editarUsuario(this.userActual);  
    }
    else{
      this.userActual.peliActual=id;
      this.editarUsuario(this.userActual);
    }
  }
  addHistorial(p:Pelicula){
    let histo:Pelicula[]=this.userActual.historial;
    histo.push(p);
    this.userActual.historial=histo;
    this.editarUsuario(this.userActual);
  }
  getUsuario(id:number){
    return this.http.get<Usuario>(this.host+'/'+id);
  }
  getUsuarios(){
    this.usuariosObs=this.http.get<Usuario[]>(this.host)
    this.usuariosObs.subscribe(obj => this.usuarios=obj);
    //console.log(this.usuarios)
  }
  borrarUsuario(id:number){
    return this.http.delete(this.host+'/'+id).subscribe(p=>this.getUsuarios());
  }
  nuevoUsuario(user:Usuario){
    this.http.post(this.host, user).subscribe(p=>this.getUsuarios());
  }
  obtenerUsuarioUser(user:string,pass:string) {
    for(var i=0;i<this.usuarios.length;i++){
      if(this.usuarios[i].usuario.includes(user)){
        return this.usuarios[i];
      }
    }
    return null;
  }
  editarUsuario(user:Usuario){
    if(user.id==null){
      this.nuevoUsuario(user);
    }
    else{
      this.http.patch(this.host+'/'+user.id,user).subscribe(p=>this.getUsuarios());
    }
  }

  logout(){
    this.adminlogueado=false;
    this.userActual=null;
    this.userlogueado=null;
    localStorage.removeItem("usuario")
  }

  loguearAdmin(pass:string){
    if(this.administrador.contrasena==pass){
      this.adminlogueado=true;
      this.userActual=this.administrador;
      localStorage.setItem("usuario",JSON.stringify(this.userActual))
      return true;
    }
    else
      return false
  }

  loguearUser(user:string,pass:string){
    //this.adminlogueado=false;
    //console.log(user,pass)
    let userBuscado:Usuario =this.obtenerUsuarioUser(user,pass);
    
    if(userBuscado!=null){
      if(userBuscado.contrasena==pass){
        this.userlogueado=true;
        this.userActual=userBuscado;
        localStorage.setItem("usuario",JSON.stringify(this.userActual))
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
}
