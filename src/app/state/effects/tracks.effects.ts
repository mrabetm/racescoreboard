import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {createEffects} from "@ngrx/effects/src/effects_module";
import {catchError, EMPTY, map, mergeMap} from "rxjs";
import {TrackSbService} from "../../services/track-sb.service";
import {retrieveTrackList, retrieveTrackListSuccess} from "../actions/tracks.actions";


@Injectable()
export class TracksEffects{

  loadTracks$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveTrackList),
    mergeMap(() => this.trackService.storeGetTracks()
      .pipe(
        map(tracks => retrieveTrackListSuccess({tracks})),
        catchError(()=> EMPTY)
      ))
    )
  );



  constructor(
    private actions$: Actions,
    private trackService: TrackSbService,
  ) {
  }
}
