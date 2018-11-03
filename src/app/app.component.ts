import { Component } from '@angular/core';
import { LoginServiceService } from './Servicios/login-service.service';
import { PeliculaServiceService } from './Servicios/pelicula-service.service';
import { Pelicula } from './Clases/pelicula';

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
    if(this.servicioLogin.userActual.peliActual!=null){
      this.servicioPeli.devolverPeli();
      this.servicioPeli.peliActual.alquilada=false;
    }
    // peli.alquilada=false;
    // this.servicioPeli.editarPelicula(peli);
    // this.servicioLogin.setPeliActual(null);
    // alert("Pelicula devuelta")
  }
}
