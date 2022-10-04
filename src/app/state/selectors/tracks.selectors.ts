import {createFeatureSelector} from "@ngrx/store";
import {EntryModel} from "../../models/entry";
import {TrackModel} from "../../models/track";

export const selectTracks = createFeatureSelector<TrackModel[]>('tracks')


