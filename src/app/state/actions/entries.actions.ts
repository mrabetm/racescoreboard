import {createAction, props} from "@ngrx/store";
import {EntryModel} from "../../models/entry";

export const addEntry = createAction(
  '[Entry List] Add Entry',
  props<{entryId: number}>()
);

export const removeEntry = createAction(
  '[Entry List] remove Entry',
  props<{entryId: number}>()
);


export const retrieveEntryList = createAction(
  '[Entry List/API] Retrieve Books Success',
  props<{ entries: EntryModel[]}>()
)
