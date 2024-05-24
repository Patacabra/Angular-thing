import { Component, OnInit } from '@angular/core';
import { HeaderLayoutComponent } from "../../layout/header/header.component";
import { FooterLayoutComponent } from "../../layout/footer/footer.component";
import { CommonModule } from '@angular/common';
import { ContactsService } from '../../../services/api-blockbuster/contacts.service';
@Component({
    selector: 'app-listar-pelicula',
    standalone: true,
    templateUrl: './listar-pelicula.component.html',
    styleUrl: './listar-pelicula.component.css',
    imports: [HeaderLayoutComponent, FooterLayoutComponent,CommonModule]
})
export class ListarPeliculaComponent implements OnInit {
  films: any[] = [];

  constructor(private contactsService: ContactsService) {}
  ngOnInit(): void {
    this.loadFilms();
}
  loadFilms(): void {
  this.contactsService.getFilms().subscribe({
    next: (data) => {
      this.films = data.data;
      console.log(this.films);
    },
    error: (error) => {
      console.error('Hubo un error al traer las películas', error);
    },
  });
}
onRefreshClick(): void {
  this.loadFilms();
}
}
