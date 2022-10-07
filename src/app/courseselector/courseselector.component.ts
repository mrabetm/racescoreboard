import {Component, OnInit, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EntryserviceService} from '../services/entryservice.service';
import {FormControl, FormGroup} from '@angular/forms';
import {EntrySbService} from "../services/entry-sb.service";
import {CarSbService} from "../services/car-sb.service";
import {TrackSbService} from "../services/track-sb.service";
import {CarModel} from "../models/car";
import {TrackModel} from "../models/track";
import {EntryModel, EntryModelPostForm} from "../models/entry";
import {Store} from "@ngrx/store";
import {retrieveTrackList, retrieveTrackListSuccess} from "../state/actions/tracks.actions";
import {selectAllTracks, selectTracksFeatureState} from "../state/selectors/tracks.selectors";
import {selectAllCars, selectCarsFeatureState} from "../state/selectors/cars.selectors";
import {retrieveCarList} from "../state/actions/cars.actions";
import {Observable} from "rxjs";
import {selectAll, TrackModelState} from "../state/reducers/tracks.reducer";
import {addEntry, retrieveEntryList} from "../state/actions/entries.actions";
import {selectAllEntries} from "../state/selectors/entries.selectors";

@Component({
  selector: 'app-courseselector',
  templateUrl: './courseselector.component.html',
  styleUrls: ['./courseselector.component.css']
})
export class CourseselectorComponent {

  // @Input() tracks: TrackModel[] = [];

  private _selectedTrack: TrackModel = {
    id: 0,
    name: 'example',
    location: "example",
    length: 0,
    entryList: [],
  }

  submitEntry?: EntryModelPostForm = undefined;
  toBeInsertedDate: Date = new Date();

  entries$: Observable<EntryModel[]>;
  cars$: Observable<CarModel[]>;
  tracks$: Observable<TrackModel[]>;


  entryForm = new FormGroup({
    playername: new FormControl(''),
    entrytime: new FormControl(''),
    car: new FormControl<CarModel | undefined | null>({
      id: 0, name: ""
    }),
    track: new FormControl<TrackModel | undefined | null>({
      id: 0, name: "", location: "", length: 0, entryList: []
    })
  })


  constructor(private entryService: EntryserviceService,
              private entrySbService: EntrySbService,
              private _trackSbService: TrackSbService,
              private carSbService: CarSbService,
              private _store: Store<TrackModelState>) {
    this.tracks$ = this.store.select(selectAllTracks)
    this.cars$ = this.store.select(selectAllCars)
    this.entries$ = this.store.select(selectAllEntries)
    console.log(this.tracks$)
  }


  get trackSbService(): TrackSbService {
    return this._trackSbService;
  }

  set trackSbService(value: TrackSbService) {
    this._trackSbService = value;
  }


  get store(): Store<TrackModelState> {
    return this._store;
  }

  set store(value: Store<TrackModelState>) {
    this._store = value;
  }

  get carList(): CarModel[]{
    return this.carSbService.findAll()
  }

  get trackList(): TrackModel[]{
    return this._trackSbService.findAll()
  }

  get selectedTrack(): TrackModel {
    return this._selectedTrack;
  }

  setSelectedTrack(value: TrackModel) {
    this._selectedTrack = value;
  }

  onSubmit() {
    let toBeFormattedTime = this.entryForm.value.entrytime?.split(":", 3);
    let entryTimeString = toBeFormattedTime![0] + toBeFormattedTime![1] + toBeFormattedTime![2];

    this.submitEntry = ({
      id: 0,
      entryTime: parseInt(entryTimeString),
      date: new Date(),
      car: this.entryForm.value.car,
      player: {
        name: this.entryForm.value.playername!,
      },
      track: {
        id: this.entryForm.value.track!.id
      }
    } as EntryModelPostForm)

    this.store.dispatch(addEntry({entry: this.submitEntry}))

  }

  ngOnInit(): void {
    this.store.dispatch(retrieveTrackList())
    this.store.dispatch(retrieveCarList())
    this.store.dispatch(retrieveEntryList())
  }

}
