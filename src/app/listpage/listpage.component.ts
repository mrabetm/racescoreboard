import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TrackModel} from '../models/track';
import {EntryserviceService} from '../services/entryservice.service';
import {CarModel} from "../models/car";
import {CarSbService} from "../services/car-sb.service";
import {EntryModel} from "../models/entry";
import {MatDialog} from "@angular/material/dialog";
import {DialogSubmitRoundComponent} from "../dialog-submit-round/dialog-submit-round.component";

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.css']
})
export class ListpageComponent implements OnInit, OnChanges{
  @Input() selectedTrack: TrackModel = {
    id: 0,
    name: 'example',
    location: "example",
    length: 0,
    entryList: [],
  };

  selectedCar: CarModel = {
    id: 0,
    name: "car",
  }

  formattedDate: Date = new Date();

  uniq: number[] = [];

  entries: TrackModel['entryList'] = this.selectedTrack.entryList;

  constructor(private entryService: EntryserviceService, private carSbService: CarSbService, public dialog: MatDialog) {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSubmitRoundComponent, {
      width: '400px',
      data: this.entries
    })

    dialogRef.afterClosed().subscribe(result =>{
      console.log('this dialog was closed, following data was transferred' , result)
    })
  }



  filterBasedByCar(car: CarModel){
    return this.entries = this.selectedTrack.entryList.filter((entry) =>{
      return entry.car.id === car.id
    })
  }

  filterBasedByWeek(week: EntryModel['week']){
    return this.entries = this.selectedTrack.entryList.filter((entry) => {
      return entry.week == week;
    })
  }

  assignPointsToEntries(entries: TrackModel['entryList']){
    let maxScore: number;
    entries.length >= 15 ? maxScore = 29 : maxScore = 19;

    return entries.sort((a, b)=> {
      return (a.entryTime > b.entryTime) ? 1 : -1;
    }).map((entry, index)=> {
      let newEntry = {...entry, ranking: index + 1};
      // entry.ranking = index + 1;
      console.log(newEntry)
      if (index >= 0 && index <= 10 && !(entries.length > 10)){
        newEntry.score = maxScore;
        maxScore = Math.max(maxScore - 2, Math.min(0))
        return newEntry
      } else if (entries.length >= 15){
        console.log("hier",maxScore)
        newEntry.score = maxScore;
        maxScore = Math.max(maxScore - 2, Math.min(0))
        return newEntry
      }
      entry.score = 0

      return entry
    })
  }


  get carList(): CarModel[]{
    return this.carSbService.findAll()
  }

  ngOnChanges(changes:SimpleChanges){
    if (changes['selectedTrack']?.currentValue) {
      this.entries = [...this.selectedTrack.entryList]
      this.entries = this.assignPointsToEntries(this.entries)
      console.log(this.entries)
    }

    let weeks = this.selectedTrack.entryList.map((entry) =>{
      return entry.week
    })
    this.uniq = [...new Set(weeks.filter(n => !!n) as number[])]
    }

  ngOnInit(): void {
  }

}
