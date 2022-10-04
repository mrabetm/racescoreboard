import {createFeatureSelector} from "@ngrx/store";
import {CarModel} from "../../models/car";

export const selectCars = createFeatureSelector<CarModel[]>('cars')
