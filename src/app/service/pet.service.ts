import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import { Pet } from '../model/Pet';
import { map } from 'rxjs';
import { CreatePet } from '../model/CreatePet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  readonly #httpClient = inject(HttpClient)

  private url: string

  constructor(private http: HttpClient) {
    this.url = environment.backendUrl;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this.url).pipe(
      map(pets => pets.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }

  addPet(pet: CreatePet): Observable<Pet> {
    return this.http.post<Pet>(this.url, pet)
  }
}
