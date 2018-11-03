import { Pelicula } from "./pelicula";

export class Usuario {
    id:number;
    nombre:string;
    apellido:string;
    usuario:string;
    contrasena:string;
    telefono:number;
    correo:string;
    estado:boolean;
    peliActual:number;
    historial:Pelicula[];

    constructor(nombre:string,apellido:string,usuario:string,
        contrasena:string,telefono:number,correo:string){
            this.id=null;
            this.nombre=nombre;
            this.apellido=apellido;
            this.usuario=usuario;
            this.contrasena=contrasena;
            this.telefono=telefono;
            this.correo=correo;
            this.peliActual=null;
            this.estado=false;
            this.historial=[];
    }
}
