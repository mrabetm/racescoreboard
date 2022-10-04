import {Injectable} from '@angular/core';
import {EntryModel} from "../models/entry";
@Injectable({
  providedIn: 'root'
})
export class EntryserviceService {
  // public entries: EntryModel[];
  //
  // constructor() {
  //   this.entries = []
  // }
  //
  // findAll(): EntryModel[] | any {
  //   return this.entries;
  // }
  //
  // findById(id: number): EntryModel | any {
  //   let indexOfEntry = this.entries. findIndex((entry: EntryModel) => {
  //     return entry.id == id
  //   })
  //   if (this.entries[indexOfEntry] == null) return null;
  //   return this.entries[indexOfEntry]
  // }
  //
  // calculateRankingAndPoints(entriesList: EntryModel[]) {
  //   let p   oints = 18;
  //
  //   for (let entry of entriesList) {
  //     if (entriesList.length < 15) points == 10;
  //     let timeArray = entry.entrytime.split(":", 3)
  //     let timeString = timeArray[0] + timeArray[1] + timeArray[2]
  //     entriesList.sort((a, b) =>
  //       parseInt(a.entrytime.split(":").join("")) - parseInt(b.entrytime.split(":").join("")))
  //
  //   }
  // }
  //
  // saveOrUpdate(entry: Entry) {
  //   if (this.entries.length == 0) this.save(entry)
  //   for (let i = 0; i < this.entries.length; i++) {
  //     if (entry.playername != this.entries[i].playername) {
  //       this.save(entry)
  //     }
  //     this.update(entry)
  //   }
  // }
  //
  // save(entry: Entry): Entry | any {
  //   this.entries.push(entry)
  // }
  //
  // update(entry: Entry): Entry | any {
  //   let toBeUpdatedEntry = this.entries.find(this.findIndextoUpdate, entry.playername)
  //   let index = this.entries.indexOf(toBeUpdatedEntry!)
  //   console.log(toBeUpdatedEntry)
  //
  //   console.log(this.entries[index].id)
  //   this.entries[index] = entry;
  //
  // }
  //
  // findIndextoUpdate(entry: any) {
  //   return entry.playername === this;
  // }
}
