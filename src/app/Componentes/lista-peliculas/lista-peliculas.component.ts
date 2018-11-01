import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import {PeliculaServiceService} from '../../Servicios/pelicula-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../Clases/pelicula';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  

  constructor(private servicioLogin:LoginServiceService,private router:Router,
    private servicioPeli:PeliculaServiceService) {
    if(!this.servicioLogin.adminlogueado && !this.servicioLogin.userlogueado){
      console.log("devolvio login")
      this.router.navigate(['/login'])
    }
  }
  verInfo(p:Pelicula){
    if(this.servicioLogin.userlogueado){
      this.router.navigate(['/peliculas/'+p.id])
    }
    else{
      this.router.navigate(['/abmpelicula/'+p.id])
    }
  }
  borrar(p:Pelicula){
    this.servicioPeli.borrarPelicula(p.id);
  }
  ngOnInit() {
  }
}