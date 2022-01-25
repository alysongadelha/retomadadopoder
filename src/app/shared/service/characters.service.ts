import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersVampire } from './model/character-vampire.model';
import { ResponsePageable } from './model/responsePageble.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3358/api/CharVampireController';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getCharactersWithFlag(flag: string): Observable<CharactersVampire> {
    return this.httpClient.get<CharactersVampire>(
      `${this.apiUrl}/filiation/${flag}`
    );
  }

  public getCharactersWithFlagPaginator(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(`${this.apiUrl}`);
  }

  public getAllChracters(): Observable<CharactersVampire[]> {
    return this.httpClient.get<CharactersVampire[]>(`${this.apiUrl}`);
  }
}
