import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  readonly #httpClient = inject(HttpClient)

  private url: string

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/pets";
  }

  getPets(): Observable<any> {
    return this.http.get(this.url);
  }
}
