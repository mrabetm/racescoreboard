import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EntryModel} from "../../models/entry";
import {EntityState} from "@ngrx/entity";
import {selectAll} from "../reducers/entries.reducer";


export const selectEntriesFeatureState = createFeatureSelector<EntityState<EntryModel>>('entries');

export const selectAllEntries = createSelector(
  selectEntriesFeatureState,
  selectAll,
)
