import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbmPeliculasComponent } from './Componentes/abm-peliculas/abm-peliculas.component';
import { InfoPeliculaComponent } from './Componentes/info-pelicula/info-pelicula.component';
import { AbmUsuariosComponent } from './Componentes/abm-usuarios/abm-usuarios.component';
import { InfoUsuarioComponent } from './Componentes/info-usuario/info-usuario.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ListaPeliculasComponent } from './Componentes/lista-peliculas/lista-peliculas.component';
import { ListaUsuariosComponent } from './Componentes/lista-usuarios/lista-usuarios.component';
import { MasValoradasComponent } from './Componentes/mas-valoradas/mas-valoradas.component';
import { MasAlquiladasComponent } from './Componentes/mas-alquiladas/mas-alquiladas.component';
import { HistorialComponent } from './Componentes/historial/historial.component';

const routes: Routes = [
  {path:'listapeliculas', component: ListaPeliculasComponent},
  {path:'abmpelicula/:id', component: AbmPeliculasComponent},
  {path:'abmpelicula/nuevo', component: AbmPeliculasComponent},
  {path:'abmusuario/:id', component: AbmUsuariosComponent},
  {path:'abmusuario/nuevo', component: AbmUsuariosComponent},
  {path:'peliculas/:id', component: InfoPeliculaComponent},
  {path:'listausuarios', component: ListaUsuariosComponent},
  {path:'usuarios/:id', component: InfoUsuarioComponent},
  {path:'masvaloradas', component: MasValoradasComponent},
  {path:'masalquiladas', component: MasAlquiladasComponent},
  {path:'historial/:id', component: HistorialComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
