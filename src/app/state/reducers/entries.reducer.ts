import {EntryModel} from "../../models/entry";
import {createReducer, on} from "@ngrx/store";
import {addEntry, addEntrySuccess, retrieveEntryList, retrieveEntryListSuccess} from "../actions/entries.actions";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export interface EntryModelState extends EntityState<EntryModel>{
  loaded: boolean,
  loading: boolean,
}

export const entryModelAdapter: EntityAdapter<EntryModel> = createEntityAdapter<EntryModel>();

export const initialEntryModelState: EntryModelState = entryModelAdapter.getInitialState({
  loaded: false,
  loading: false,
})

export const initialState: EntryModel[] = [{
  id: 1
} as EntryModel];

export const entriesReducer = createReducer(
  initialEntryModelState,
  on(retrieveEntryList, ((state) => ({
    ...state,
    loading: true,
    loaded: false,
  }))),
  on(retrieveEntryListSuccess, (state, {entries}) => {
    return entryModelAdapter.setAll(entries, {...state, loading: false, loaded: true})
  }),
  on(addEntry, ((state) => ({
    ...state,
    loading: true,
    loaded: false,
  }))),
  on(addEntrySuccess, (state, {entry}) => {
    return entryModelAdapter.setOne(entry, {...state, loading: false, loaded: true})
  })
)

export const {selectAll} = entryModelAdapter.getSelectors()
