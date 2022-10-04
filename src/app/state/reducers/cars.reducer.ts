import {CarModel} from "../../models/car";
import {createReducer, on} from "@ngrx/store";
import {retrieveCarList, retrieveCarListSuccess} from "../actions/cars.actions";

export const initialState: CarModel[] = [{
  id: 0,
  name: "null"
}]

export const carReducer = createReducer(
  initialState,
  on(retrieveCarList, ((state)=> state)),
  on(retrieveCarListSuccess, (state, {cars})=>cars),
)
