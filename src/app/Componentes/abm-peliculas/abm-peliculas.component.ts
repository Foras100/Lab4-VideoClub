import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculaServiceService } from '../../Servicios/pelicula-service.service';
import { Pelicula } from '../../Clases/pelicula';

@Component({
  selector: 'app-abm-peliculas',
  templateUrl: './abm-peliculas.component.html',
  styleUrls: ['./abm-peliculas.component.css']
})
export class AbmPeliculasComponent implements OnInit {

  nuevo:boolean=false;
  peli:Pelicula=null;
  // titulo:string="";
  // descripcion:string="";
  // genero:string="";
  // imagen:string="";
  imagenDefault:string="https://banner2.kisspng.com/20180728/jpc/kisspng-question-mark-clip-art-comic-question-5b5d39928b3bf6.2805716515328362425703.jpg";
  
  constructor(private servicioLogin:LoginServiceService,private router:Router,
    private servicioPelicula:PeliculaServiceService,private route:ActivatedRoute) {
    if(!this.servicioLogin.adminlogueado){
      this.router.navigate(['/login'])
    }
    this.nuevo=this.route.snapshot.url[this.route.snapshot.url.length-1].toString()=="nuevo";
    if(!this.nuevo){
      this.servicioPelicula.getPelicula(parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe( data => {
        this.peli=data;  
        console.log(this.peli);
      });
    }
    else{
      this.peli=new Pelicula("","",this.imagenDefault,"");
    }
  }

  editar(){
      this.servicioPelicula.editarPelicula(this.peli);
      this.router.navigate(['/listapeliculas']);
  }
  borrar(){
    this.servicioPelicula.borrarPelicula(this.peli.id);
      this.router.navigate(['/listapeliculas']);
  }
  ngOnInit() {
  }
}
