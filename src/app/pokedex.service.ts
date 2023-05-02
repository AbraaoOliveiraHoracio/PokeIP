import { PokedexComponent } from './pokedex/pokedex.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dex } from './Dex';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor( private http:  HttpClient) { }

  url : string = "https://pokeapi.co/api/v2/pokemon/"
  public id : number = 0;

  getPokemon() : Observable<any>{
    return this.http.get<any>(this.url+this.id);
}




}

