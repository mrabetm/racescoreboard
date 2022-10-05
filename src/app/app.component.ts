import { Component } from '@angular/core';


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
