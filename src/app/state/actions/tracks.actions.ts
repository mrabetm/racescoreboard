import {createAction, props} from "@ngrx/store";
import {EntryModel} from "../../models/entry";
import {TrackModel} from "../../models/track";

export const addTrack = createAction(
  '[Track List] Add Track',
  props<{trackId: number}>()
)

export const removeTrack = createAction(
  '[Track List] remove Track',
  props<{trackId: number}>()
)

export const retrieveTrackList = createAction(
  '[Track List/API] Retrieve Tracks',
)

export const retrieveTrackListSuccess = createAction(
  '[Track List/API] Retrieve Tracks Success',
  props<{ tracks: TrackModel[]}>()
)
