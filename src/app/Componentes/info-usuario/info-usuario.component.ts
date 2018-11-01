import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  constructor(private servicioLogin:LoginServiceService,private router:Router) { 
    if(!this.servicioLogin.adminlogueado || !this.servicioLogin.userlogueado){
      this.router.navigate(['/login'])
    }
  }

  ngOnInit() {
  }

}
