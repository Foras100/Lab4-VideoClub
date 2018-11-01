import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private servicioLogin:LoginServiceService,private router:Router) {
    if(!this.servicioLogin.adminlogueado && !this.servicioLogin.userlogueado){
      this.router.navigate(['/login'])
    }
  }
  borrar(id:number){
    this.servicioLogin.borrarUsuario(id);
    this.router.navigate(['/listausuarios']);
  }
  ngOnInit() {
  }

}
