import {createAction, props} from "@ngrx/store";
import {EntryModel, EntryModelPostForm} from "../../models/entry";

export const addEntry = createAction(
  '[Entry List] Add Entry',
  props<{entry: EntryModelPostForm}>()
);

export const addEntrySuccess = createAction(
  '[Entry List] Add Entry Success',
    props<{entry: EntryModelPostForm}>()
)

export const removeEntry = createAction(
  '[Entry List] remove Entry',
  props<{entryId: number}>()
);


export const retrieveEntryList = createAction(
  '[Entry List/API] Retrieve Entries',
)

export const retrieveEntryListSuccess = createAction(
  '[Entry List/API] Retrieve Entries Success',
  props<{ entries: EntryModel[]}>()
)

