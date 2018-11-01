import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Servicios/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../Clases/usuario';

@Component({
  selector: 'app-abm-usuarios',
  templateUrl: './abm-usuarios.component.html',
  styleUrls: ['./abm-usuarios.component.css']
})
export class AbmUsuariosComponent implements OnInit {

  nuevo:boolean=false;
  usuario:Usuario;
  contrasena2:string="";

  constructor(private servicioLogin:LoginServiceService,private router:Router,private route:ActivatedRoute) { 
    this.nuevo=this.route.snapshot.url[this.route.snapshot.url.length-1].toString()=="nuevo";
    if(!this.nuevo){
      this.servicioLogin.getUsuario(parseInt(this.route.snapshot.paramMap.get('id')))
    .subscribe( data => {this.usuario=data;},err=>console.log(err));
    }
    else{
      this.usuario=new Usuario("","","","",null,"");
    }
  }
  editar_crear(){
    this.servicioLogin.editarUsuario(this.usuario);
    this.router.navigate(['/listausuarios']);
  }

  ngOnInit() {
  }

}
