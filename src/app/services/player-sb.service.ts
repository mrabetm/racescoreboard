import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {PlayerModel} from "../models/player";


@Injectable({
  providedIn: 'root'
})
export class PlayerSbService {
  private players: PlayerModel[] =[];
  constructor(private httpClient: HttpClient) { }


  restGetPlayers(): Observable<PlayerModel[]>{
    return this.httpClient.get<PlayerModel[]>(`http://localhost:8082/player`)
      .pipe(
        map(responseData => {
          const playerArray: PlayerModel[] = [];

          for (const key in responseData){
            playerArray.push(responseData[key])
          }
          return playerArray
        })
      )
  }

  restGetPlayerId(name: String){
    this.httpClient.get<PlayerModel>('http://localhost:8082/player/returnId/{n}')
  }

  restPostPlayer(player: PlayerModel){
    const body = {
      "name": player.name
    }
    this.httpClient.post<PlayerModel>(`http://localhost:8082/player`, body, {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json'}
      ), responseType: 'json', observe: 'response'
    }).subscribe(
      responseData => {
        console.log(responseData)
      }

    )
  }
}
