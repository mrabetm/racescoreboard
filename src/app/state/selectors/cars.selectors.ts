import {createFeatureSelector} from "@ngrx/store";
import {CarModel} from "../../models/car";

export const selectCarsFeatureState = createFeatureSelector<CarModel[]>('cars');
