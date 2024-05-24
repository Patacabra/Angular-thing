import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CrearPeliculaComponent } from './pages/crear-pelicula/crear-pelicula.component';
import { ListarPeliculaComponent } from './pages/listar-pelicula/listar-pelicula.component';
import { EditarPeliculaComponent } from './pages/editar-pelicula/editar-pelicula.component';
import { EliminarPeliculaComponent } from './pages/eliminar-pelicula/eliminar-pelicula.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
},
{
    path: 'crear-pelicula',
    component: CrearPeliculaComponent,
},
{
    path: 'listar-peliculas',
    component: ListarPeliculaComponent,
},
{
    path: 'editar-pelicula',
    component: EditarPeliculaComponent,
},
{
    path: 'eliminar-pelicula',
    component: EliminarPeliculaComponent,
}
];
