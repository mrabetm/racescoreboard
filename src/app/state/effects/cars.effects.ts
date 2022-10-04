import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, EMPTY, map, mergeMap} from "rxjs";
import {TrackSbService} from "../../services/track-sb.service";
import {retrieveCarList, retrieveCarListSuccess} from "../actions/cars.actions";
import {CarSbService} from "../../services/car-sb.service";

@Injectable()
export class CarsEffects{

  loadTracks$ = createEffect(() => this.actions$.pipe(
      ofType(retrieveCarList),
      mergeMap(() => this.carService.storeGetCars()
        .pipe(
          map(cars => retrieveCarListSuccess({cars})),
          catchError(()=> EMPTY)
        ))
    )
  );



  constructor(
    private actions$: Actions,
    private carService: CarSbService,
  ) {
  }
}
