import {createAction, props} from "@ngrx/store";
import {TrackModel} from "../../models/track";
import {CarModel} from "../../models/car";

export const addCar = createAction(
  '[Car List] Add Car',
  props<{carId: number}>()
)

export const removeCar = createAction(
  '[Car List] remove Car',
  props<{carId: number}>()
)

export const retrieveCarList = createAction(
  '[Car List/API] Retrieve Cars',
)

export const retrieveCarListSuccess = createAction(
  '[Car List/API] Retrieve Cars Success',
  props<{ cars: CarModel[]}>()
)
