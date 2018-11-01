import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../Clases/pelicula';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { PeliculaServiceService } from '../../Servicios/pelicula-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mas-valoradas',
  templateUrl: './mas-valoradas.component.html',
  styleUrls: ['./mas-valoradas.component.css']
})
export class MasValoradasComponent implements OnInit {
  
  pelis:Pelicula[];
  
  constructor(private serviciologin:LoginServiceService,private servicioPeli:PeliculaServiceService
    ,private router:Router) {
      if(this.serviciologin.userActual==null){
        this.router.navigate(['/login'])
      }
      servicioPeli.getObservable().subscribe((pelicula:Pelicula[])=>{
        this.pelis=pelicula;
        this.pelis.sort((a:Pelicula,b:Pelicula)=>{
          if(a.valoracion-b.valoracion>0){
            return -1;
          }
        else{
          return 1;
        }})
      });
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
