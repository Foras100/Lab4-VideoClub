import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { AbmPeliculasComponent } from './Componentes/abm-peliculas/abm-peliculas.component';
import { AbmUsuariosComponent } from './Componentes/abm-usuarios/abm-usuarios.component';
import { InfoPeliculaComponent } from './Componentes/info-pelicula/info-pelicula.component';
import { InfoUsuarioComponent } from './Componentes/info-usuario/info-usuario.component';
import { ListaPeliculasComponent } from './Componentes/lista-peliculas/lista-peliculas.component';
import {HttpClientModule} from '@angular/common/http';
import { ListaUsuariosComponent } from './Componentes/lista-usuarios/lista-usuarios.component';
import { MasValoradasComponent } from './Componentes/mas-valoradas/mas-valoradas.component';
import { MasAlquiladasComponent } from './Componentes/mas-alquiladas/mas-alquiladas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AbmPeliculasComponent,
    AbmUsuariosComponent,
    InfoPeliculaComponent,
    InfoUsuarioComponent,
    ListaPeliculasComponent,
    ListaUsuariosComponent,
    MasValoradasComponent,
    MasAlquiladasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
