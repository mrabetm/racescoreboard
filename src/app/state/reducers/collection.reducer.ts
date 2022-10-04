import {createReducer, on} from "@ngrx/store";
import {addEntry, removeEntry,} from "../actions/entries.actions";


export const initialState: ReadonlyArray<string> = [];

// export const collectionReducer = createReducer(
//   initialState,
//   on(removeEntry, (state, {entryId}) => state.filter((id) => id !== entryId)),
//   on(addEntry, (state, {entryId})=>{
//     if (state.indexOf(entryId) > -1) return state;
//
//     return [...state, entryId]
//   })

)
