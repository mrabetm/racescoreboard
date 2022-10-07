
import {TrackModel, TrackModelPost} from "./track";
import {CarModel} from "./car";
import {PlayerModel, PlayerModelPost} from "./player";

export interface EntryModel{
  id: number;
  ranking?: number;
  entryTime: number;
  week?: number;
  date: Date;
  car: CarModel;
  score?: number;
  player: PlayerModel;
  track: TrackModel;
}

export type EntryModelPostForm = Omit<EntryModel, "ranking" | "week" | "score">

export type EntryModelPost = Partial<EntryModel> & { id: number }

//ranking, week





// export class Entry {
//   private _id: number;
//   private _entrytime: string;
//   private _date: Date;
//   private _car: Car | undefined | null;
//   private _points: number | null;
//   private _playername: string
//   private _track: Track | undefined | null;
//
//
//   constructor(id: number, entrytime: string, date: Date, car: Car | undefined | null, points: number | null, playername: string, track: Track | undefined | null) {
//     this._id = id;
//     this._entrytime = entrytime;
//     this._date = date;
//     this._car = car;
//     this._points = points;
//     this._playername = playername;
//     this._track = track;
//   }
//
//   get playername(): string {
//     return this._playername;
//   }
//
//   set playername(value: string) {
//     this._playername = value;
//   }
//
//
//   get track(): Track | undefined | null {
//     return this._track;
//   }
//
//   set track(value: Track | undefined | null) {
//     this._track = value;
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
//   get date(): Date {
//     return this._date;
//   }
//
//   set date(value: Date) {
//     this._date = value;
//   }
//
//   get car(): Car | undefined | null {
//     return this._car;
//   }
//   set car(value:Car | undefined | null) {
//     this._car = value;
//   }
//
//
//   get entrytime(): string {
//     return this._entrytime;
//   }
//
//   set entrytime(value: string) {
//     this._entrytime = value;
//   }
//
//   get points(): number | null {
//     return this._points;
//   }
//
//   set points(value: number | null) {
//     this._points = value;
//   }
// }
