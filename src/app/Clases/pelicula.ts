export class Pelicula {
    id:number;
    titulo: string;
    descripcion: string;
    imagen: string;
    genero: string;
    alquilada: boolean;
    valoracion:number
    cantidadAlquileres: number;
    valores:number[]

    constructor(titulo:string,descripcion:string,imagen:string,genero:string){
        //this.id=id;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.imagen=imagen;
        this.genero=genero;
        this.valores=[];
        this.alquilada=false;
        this.cantidadAlquileres=0;
        this.valoracion=0;
    }
    // getValoracion(){
    //     let suma:number=0;
    //     for(var i=0;i<this.valores.length;i++){
    //         suma+=this.valores[i]
    //     }
    //     return (suma/this.valores.length);
    // }
}
