import { Injectable } from '@angular/core';
import { Pelicula } from '../Clases/pelicula';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

  peliculasObs:Observable<Pelicula[]>
  peliculas:Pelicula[]=[];
  host:string="http://localhost:3001/pelicula"

  constructor(private http:HttpClient,private servicioLogin:LoginServiceService) {
    this.getPeliculas();
  }

  devolverPeli(){
    let id:number=this.servicioLogin.userActual.id;
    this.servicioLogin.userActual.peliActual=null;
    this.servicioLogin.editarUsuario(this.servicioLogin.userActual);
    this.getPelicula(id).subscribe(p=>{
      p.alquilada=false;
      this.editarPelicula(p);
    });
  }


  alquilarPelicula(p:Pelicula){
    p.alquilada=true;
    p.cantidadAlquileres++;
    this.servicioLogin.userActual.peliActual=p.id;
    this.servicioLogin.editarUsuario(this.servicioLogin.userActual);
    this.servicioLogin.getUsuarios();
    this.editarPelicula(p);
  }

  getObservable(){
    return this.http.get<Pelicula[]>(this.host)
  }
  getPeliculas(){
    this.peliculasObs=this.http.get<Pelicula[]>(this.host)
    this.peliculasObs.subscribe(obj => {this.peliculas=obj;console.log(this.peliculas)});
    
  }
  getPeliMasValoradas(){
    let peli:Array<Pelicula>=this.peliculas.sort((a:Pelicula,b:Pelicula)=>{
      return (a.valoracion-b.valoracion);
    });
    return peli;
  }
  getPeliMasAlquiladas(){
    
    let peli:Pelicula[]=this.peliculas.sort((a:Pelicula,b:Pelicula)=>{
      return (a.cantidadAlquileres-b.cantidadAlquileres);
    });
    return peli;
  }
  borrarPelicula(id:number){
    return this.http.delete(this.host+'/'+id).subscribe(p=>this.getPeliculas());
  }
  nuevaPelicula(p:Pelicula){
    return this.http.post(this.host, p).subscribe(p=>this.getPeliculas());
  }
  editarPelicula(p:Pelicula){
    if(p.id==null){
      this.nuevaPelicula(p)
    }
    else{
      return this.http.put(this.host+'/'+p.id,p).subscribe(p=>this.getPeliculas());
    }
  }
  getPelicula(id:number){
    return this.http.get<Pelicula>(this.host+'/'+id);
  }
  valorarPelicula(p:Pelicula,valor:number){
    p.valores.push(valor);
    let suma:number=0;
    for(var i=0;i<p.valores.length;i++){
        suma=+suma+p.valores[i]
    }
    p.valoracion=(suma/p.valores.length);
    this.editarPelicula(p);
  }

   buscarPeliculaTitulo(titulo:string){
     for(var i=0;i<this.peliculas.length;i++){
       if(this.peliculas[i].titulo=titulo)
       return this.peliculas[i];
     }
     return null;
   }
   buscarPeliculaId(id:number){
    for(var i=0;i<this.peliculas.length;i++){
      if(this.peliculas[i].id==id)
      return this.peliculas[i];
    }
    return null;
  }
}
