import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersVampire } from './model/character-vampire.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(public httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3358/api/CharVampireController/filiation/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getCharactersWithFlag(flag: string): Observable<CharactersVampire> {
    return null;
  }
}
