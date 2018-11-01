import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../Clases/pelicula';
import { PeliculaServiceService } from '../../Servicios/pelicula-service.service';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styleUrls: ['./info-pelicula.component.css']
})
export class InfoPeliculaComponent implements OnInit {

  pelicula:Pelicula=null;
  valor:number;
  valorado:boolean;

  constructor(private servicioLogin:LoginServiceService,private router:Router,
    private route: ActivatedRoute,private servicioPelicula:PeliculaServiceService) { 
    this.valorado=false;
    this.valor=5;
    if(!this.servicioLogin.adminlogueado && !this.servicioLogin.userlogueado){
      this.router.navigate(['/login'])
    }
    this.pelicula=this.servicioPelicula.buscarPeliculaId(parseInt(this.route.snapshot.paramMap.get('id')));
    if(this.pelicula==null){
      console.log("no encontro peli")
      this.router.navigate(['/listapeliculas'])
    }
  }
  valorar(){
    if(!this.valorado){
      this.valorado=true;
      this.servicioPelicula.valorarPelicula(this.pelicula,this.valor);
    }
    else{
      alert("Pelicula ya valorada.")
    }
  }
  alquilar(){
    if(!this.pelicula.alquilada && this.servicioLogin.userActual.peliActual==null)
    this.servicioPelicula.alquilarPelicula(this.pelicula);
  }
  ngOnInit() {
  }

}
