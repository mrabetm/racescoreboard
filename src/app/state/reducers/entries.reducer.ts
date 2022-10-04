import {EntryModel} from "../../models/entry";
import {createReducer, on} from "@ngrx/store";
import {retrieveEntryList} from "../actions/entries.actions";

export const initialState: EntryModel[] = [{
  id: 1
} as EntryModel];

export const entriesReducer = createReducer(
  initialState,
  on(retrieveEntryList, (state, {entries}) => entries)
)
