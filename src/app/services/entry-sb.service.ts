import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, ObservedValueOf, Subscription} from "rxjs";
import {PlayerSbService} from "./player-sb.service";
import {EntryModel, EntryModelPost, EntryModelPostForm} from "../models/entry";

@Injectable({
  providedIn: 'root'
})
export class EntrySbService {
  private entries: EntryModel[] = [];
  constructor(private httpClient: HttpClient, private playerService: PlayerSbService) {
    this.restGetEntries().subscribe(
      responseData => this.entries = responseData,
      error => ErrorHandler.apply(error)
    )
  }

  determineIfPostOrPut(entry: EntryModel){
    for (let i = 0; i < this.entries.length; i++){
      if (entry.id == this.entries[i].id){
        this.restPutEntry(entry)
        return;
      }
      else this.restPostEntry(entry)
    }
  }

  storeGetEntries(): Observable<EntryModel[]>{
    return this.httpClient.get<EntryModel[]>('http://localhost:8082/entry')
      .pipe(
        map((entries) =>
          entries || [] ))
  }

  restGetEntries(): Observable<EntryModel[]>{
    return this.httpClient.get<EntryModel[]>(`http://localhost:8082/entry`)
      .pipe(
        map(responseData => {
          const entryArray: EntryModel[] = [];

          for (const key in responseData){
            entryArray.push(responseData[key])
          }
          return entryArray;
        })
      )
  }

  // storePostEntry(entry: EntryModelPostForm):{
  //   return this.httpClient.post<EntryModelPostForm>(``)
  // }
  restPostEntry(entry: EntryModelPostForm){
    return this.httpClient.post<EntryModel>('http://localhost:8082/entry', entry, {headers: new HttpHeaders(
        {'Content-Type': 'application/json'}
      ),})
  }

  restPutEntry(entry: EntryModel){
    return this.httpClient.put<EntryModel>(`http://localhost:8082/entry/${entry.id}`, entry, {headers: new HttpHeaders(
        {'Content-Type': 'application/json'}
      ), responseType: 'json', observe: 'response'
    }).subscribe(
      responseData =>{
        console.log(responseData)
      }
    )
  }
}
