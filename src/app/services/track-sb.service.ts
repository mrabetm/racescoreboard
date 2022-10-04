import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TrackModel} from "../models/track";

@Injectable({
  providedIn: 'root'
})
export class TrackSbService {
  private tracks: TrackModel[] = [];
  constructor(private httpClient: HttpClient) {
    // this.restGetTracks().subscribe(
    //   responseData => this.tracks = responseData,
    //   error => ErrorHandler.apply(error)
    // )
    this.storeGetTracks().subscribe(responseData => this.tracks = responseData)
    console.log(this.tracks)
  }

  findAll(): TrackModel[]{
    return this.tracks;
  }

  determineIfPostOrPut(track: TrackModel){
    for (let i = 0; i < this.tracks.length; i++){
      if (track.id == this.tracks[i].id){
        this.restPostTrack(track)
        return;
      }
      else this.restPostTrack(track)
    }
  }

  storeGetTracks(): Observable<TrackModel[]>{
    return this.httpClient.get<TrackModel[]>(`http://localhost:8082/track`)
      .pipe(
        map((tracks)=>
          tracks || []))
  }

  restGetTracks(): Observable<TrackModel[]>{
    return this.httpClient.get<TrackModel[]>(`http://localhost:8082/track`)
      .pipe(
        map(responseData => {
          const trackArray: TrackModel[] = [];

          for (const key in responseData){
            trackArray.push(responseData[key])
          }
          return trackArray;
        })
      )
  }

  restPostTrack(track: TrackModel){
    this.httpClient.post<TrackModel>('http://localhost:8082/track', JSON.stringify(track), {headers: new HttpHeaders(
        {'Content-Type': 'application/json',
        }
      ), responseType: 'json', observe: 'response'}).subscribe(responseData => {
      console.log(responseData)
    })
  }

  restPutTrack(track: TrackModel){
    return this.httpClient.put<TrackModel>(`http://localhost:8082/track/${track.id}`, track, {headers: new HttpHeaders(
        {'Content-Type': 'application/json'}
      ), responseType: 'json', observe: 'response'
    }).subscribe(
      responseData =>{
        console.log(responseData)
      }
    )
  }
}

