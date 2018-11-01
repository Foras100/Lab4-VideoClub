import { Component } from '@angular/core';
import { LoginServiceService } from './Servicios/login-service.service';
import { PeliculaServiceService } from './Servicios/pelicula-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appTP';

  constructor(private servicioLogin:LoginServiceService,private servicioPeli:PeliculaServiceService){

  }
  devolver(){
    this.servicioPeli.devolverPeli();
    alert("Pelicula devuelta")
  }
}
