import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { PeliculaServiceService } from '../../Servicios/pelicula-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../../Clases/pelicula';

@Component({
  selector: 'app-mas-alquiladas',
  templateUrl: './mas-alquiladas.component.html',
  styleUrls: ['./mas-alquiladas.component.css']
})
export class MasAlquiladasComponent implements OnInit {

  pelis:Pelicula[]=[];

  constructor(private serviciologin:LoginServiceService,private servicioPeli:PeliculaServiceService
    ,private router:Router) {
      if(this.serviciologin.userActual==null){
        this.router.navigate(['/login'])
      }
      servicioPeli.getObservable().subscribe((pelicula:Pelicula[])=>{
        this.pelis=pelicula;
        this.pelis.sort((a:Pelicula,b:Pelicula)=>{
          if(a.cantidadAlquileres-b.cantidadAlquileres>0){
            return -1;
          }
        else{
          return 1;
        }})
      });
      console.log(this.pelis);
     }

     verInfo(p:Pelicula){
      if(this.serviciologin.userlogueado){
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
