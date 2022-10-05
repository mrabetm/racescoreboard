import {TrackModel} from "../../models/track";
import {createReducer, on} from "@ngrx/store";
import {retrieveTrackList, retrieveTrackListSuccess} from "../actions/tracks.actions";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export interface TrackModelState extends EntityState<TrackModel>{
  loaded: boolean;
  loading: boolean;
}

export const trackModelAdapter: EntityAdapter<TrackModel> = createEntityAdapter<TrackModel>();

export const initialTrackModelState: TrackModelState = trackModelAdapter.getInitialState({
  loaded: false,
  loading: false,
})

export const initialState: TrackModel[] = [{
  id: 0,
  name: "null",
  location: "null",
  length: 0,
  entryList: []
}]

export const trackReducer = createReducer(
  initialTrackModelState,
  on(retrieveTrackList, ((state)=> ({
    ...state,
    loading: true,
    loaded: false,
  }))),
  on(retrieveTrackListSuccess, (state, {tracks}) => {
    return trackModelAdapter.setAll(tracks, {...state, loading: false, loaded: true})
  }),
)

export const {selectAll} = trackModelAdapter.getSelectors();
