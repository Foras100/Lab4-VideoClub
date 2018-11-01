import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { Router } from '@angular/router';
import { UsuarioI } from '../../Interfaces/usuario-i';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //private usuarios:Usuario[]
  pass:string=''
  user:string=''
  alerta:boolean
  constructor(private serviciologin:LoginServiceService,private router:Router) {
    this.alerta=false;
    
   }

  loguear(){
    console.log("Ingreso metodo loguear")
    if(this.pass!='' && this.user!=''){
      if(this.user=='admin'){
        if(this.serviciologin.loguearAdmin(this.pass)){
          this.router.navigate(['/listapeliculas'])
        }
        else{
          this.activarAlerta()
        }
      }
      else{
        if(this.serviciologin.loguearUser(this.user,this.pass)){
          this.router.navigate(['/listapeliculas'])
        }
        else{
          this.activarAlerta()
        }
      }
    }
    this.activarAlerta()
  }

  activarAlerta(){
    this.pass=''
    this.user=''
    this.alerta=true;
  }
  ngOnInit() {
  }

}
