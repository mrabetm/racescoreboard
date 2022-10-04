import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EntryModel} from "../../models/entry";


export const selectEntries = createFeatureSelector<ReadonlyArray<EntryModel>>('entries');

export const selectCollectionState = createFeatureSelector<{entryId: number}>('collection');

export const selectEntryCollection = createSelector(
  selectEntries,
  selectCollectionState,
  // (entries, collection) =>{
  //   return collection.map((id)=> entries.find((entry)=>
  //     entry.id === id
  //   )
  //}
)
