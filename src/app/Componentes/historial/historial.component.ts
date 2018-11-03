import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../../Clases/pelicula';
import { Usuario } from '../../Clases/usuario';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  peliculas:Pelicula[]=[];
  user:Usuario;
  constructor(private serviciologin:LoginServiceService,private route:Router, private router: ActivatedRoute) {
    if(!this.serviciologin.adminlogueado && !this.serviciologin.userlogueado){
      this.route.navigate(['/login'])
    }
    else{
      this.serviciologin.getUsuario(parseInt(this.router.snapshot.paramMap.get('id'))).subscribe(p=>{
        this.user=p;
        this.peliculas=this.user.historial;
      });
    }
   }
   borrarHistorial(){
     this.serviciologin.userActual.historial=[];
     this.serviciologin.editarUsuario(this.serviciologin.userActual)
     this.route.navigate(['/listapeliculas']);
   }
  ngOnInit() {
  }

}
