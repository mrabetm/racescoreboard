import {EntryModel} from "./entry";

export interface TrackModel {
  id: number;
  name: string;
  location: string;
  length: number;
  entryList: EntryModel[];
}

export type TrackModelPost = Partial<TrackModel> & {id: number}

// export class Track{
//   private _id: number;
//   private _name: string;
//   private _location: string;
//   private _length: number;
//   private _entryList: Entry[] | null;
//
//
//   constructor(id: number, name: string, location: string, length: number, entryList: [] | null) {
//     this._id = id;
//     this._name = name;
//     this._location = location;
//     this._length = length;
//     this._entryList = entryList;
//   }
//
//   get id(): number {
//     return this._id;
//   }
//
//   set id(value: number) {
//     this._id = value;
//   }
//
//   get name(): string {
//     return this._name;
//   }
//
//   set name(value: string) {
//     this._name = value;
//   }
//
//   get entries(): Entry[] | null{
//     return this._entryList;
//   }
//
//   set entries(value: Entry[] | null) {
//     this._entryList = value;
//   }
//
//   get location(): string {
//     return this._location;
//   }
//
//   set location(value: string) {
//     this._location = value;
//   }
//
//   get length(): number {
//     return this._length;
//   }
//
//   set length(value: number) {
//     this._length = value;
//   }
// }
