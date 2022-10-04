import { Component } from '@angular/core';
import {selectTracks} from "./state/selectors/tracks.selectors";
import {TrackSbService} from "./services/track-sb.service";
import {Store} from "@ngrx/store";
import {retrieveTrackList} from "./state/actions/tracks.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'racescoreboard';


  // tracks$ = this.store.select(selectTracks)
  //
  // constructor(private tracksService: TrackSbService,
  //             private store: Store) {
  // }
  //
  // ngOnInit(){
    // this.tracksService.storeGetTracks().subscribe((tracks)=> this.store.dispatch(retrieveTrackList({tracks})))
  // }
}
