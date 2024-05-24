import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavigationOption {
  link: string;
  title: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  options: NavigationOption[] = [
    { link : 'crear-pelicula', title: 'Crear Película' },
    { link : '/listar-peliculas', title: 'Listar Películas' },
    { link : '/editar-pelicula', title: 'Editar Película' },
    { link : '/eliminar-pelicula', title: 'Eliminar Película' },
  ];

}
