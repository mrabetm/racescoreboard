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
import {selectEntries} from "../state/selectors/entries.selectors";
import {retrieveTrackList} from "../state/actions/tracks.actions";
import {selectTracks} from "../state/selectors/tracks.selectors";

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

  submitEntry!: EntryModelPostForm;
  toBeInsertedDate: Date = new Date();

  tracks$ = this.store.select(selectTracks)


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
              private _store: Store) {
  }


  get trackSbService(): TrackSbService {
    return this._trackSbService;
  }

  set trackSbService(value: TrackSbService) {
    this._trackSbService = value;
  }

  get store(): Store {
    return this._store;
  }

  set store(value: Store) {
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
      score: 0,
      player: {
        name: this.entryForm.value.playername!,
      },
      track: {
        id: this.entryForm.value.track!.id
      }
    } as EntryModelPostForm)

    this.entrySbService.restPostEntry(this.submitEntry)
  }

  ngOnInit(): void {
    this.trackSbService.storeGetTracks().subscribe((tracks)=> this.store.dispatch(retrieveTrackList({tracks})))
    console.log(this.tracks$)
  }

}
