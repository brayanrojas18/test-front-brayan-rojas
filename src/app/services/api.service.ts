import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, GameById } from './../models/game.model'
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = environment?.apiUrl

  constructor(private http:HttpClient) { }

  // Get List
  getGames(filterType: string, filter: any):Observable<Game[]>{
    let direction = this.url + 'games' + (filter ? '?' + filterType + '=' + filter : '')
    return this.http.get<Game[]>(direction)
  }
  
  // Get By Id
  getGameId(id: number):Observable<GameById>{
    let direction = this.url + 'game?id=' + id
    return this.http.get<GameById>(direction)
  }
}
