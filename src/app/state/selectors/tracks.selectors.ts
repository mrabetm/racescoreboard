import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TrackModel} from "../../models/track";
import {selectAll} from "../reducers/tracks.reducer";
import {EntityState} from "@ngrx/entity";

export const selectTracksFeatureState = createFeatureSelector<EntityState<TrackModel>>('tracks')

export const selectAllTracks = createSelector(
  selectTracksFeatureState,
  selectAll
)

