import { HttpClient } from '@angular/common/http';

import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiUrl = 'http://localhost:3000/api/blockbuster';
  private http = inject(HttpClient);
  constructor() { }
  getFilms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  createFilm(film: any): Observable<any> {
    return this.http.post(this.apiUrl, film);
  }
  updateFilm(film: any): Observable<any> {
    return this.http.put(`${this.apiUrl}`, film);
  }
  deleteFilm(film: any): Observable<any> {
    console.log('Eliminando película en servicio',film);
    return this.http.delete(`${this.apiUrl}`, {body : film});
  }

}
