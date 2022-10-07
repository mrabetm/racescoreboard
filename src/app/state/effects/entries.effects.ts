import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {addEntry, addEntrySuccess, retrieveEntryList, retrieveEntryListSuccess} from "../actions/entries.actions";
import {catchError, EMPTY, map, mergeMap, of, switchMap} from "rxjs";
import {EntrySbService} from "../../services/entry-sb.service";
import {action} from "@storybook/addon-actions";


@Injectable()
export class EntriesEffects{

  loadEntries$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveEntryList),
    mergeMap(()=> this.entryService.storeGetEntries()
      .pipe(
        map( entries => retrieveEntryListSuccess({entries})),
        catchError(() => EMPTY)
      )
    )
  ));

  // addEntry$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(addEntry),
  //       mergeMap((action) => {
  //       return this.entryService.restPostEntry(action.entry)
  //   }))
  // })
  addEntry$ = createEffect(() => this.actions$.pipe(
    ofType(addEntry),
    mergeMap((action) => this.entryService.restPostEntry(action.entry).pipe(
      map( entry => addEntrySuccess({entry})),
      catchError(() => EMPTY)
    )
  )));


  constructor(
    private actions$: Actions,
    private entryService: EntrySbService
  ) {
  }
}
