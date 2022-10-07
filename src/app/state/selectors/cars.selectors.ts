import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CarModel} from "../../models/car";
import {EntityState} from "@ngrx/entity";
import {selectAll} from "../reducers/cars.reducer";

export const selectCarsFeatureState = createFeatureSelector<EntityState<CarModel>>('cars');

export const selectAllCars = createSelector(
  selectCarsFeatureState,
  selectAll
)

