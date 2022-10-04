import {TrackModel} from "../../models/track";
import {createReducer, on} from "@ngrx/store";
import {retrieveTrackList, retrieveTrackListSuccess} from "../actions/tracks.actions";

export const initialState: TrackModel[] = [{
  id: 0,
  name: "null",
  location: "null",
  length: 0,
  entryList: []
}]

export const trackReducer = createReducer(
  initialState,
  on(retrieveTrackList, ((state)=> state)),
  on(retrieveTrackListSuccess, (state, {tracks}) => tracks),
)
