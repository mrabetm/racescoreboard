import {CarModel} from "../../models/car";
import {createReducer, on} from "@ngrx/store";
import {retrieveCarList, retrieveCarListSuccess} from "../actions/cars.actions";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {trackModelAdapter} from "./tracks.reducer";

export interface CarModelState extends EntityState<CarModel>{
  loaded: boolean;
  loading: boolean;
}

export const carModelAdapter: EntityAdapter<CarModel> = createEntityAdapter<CarModel>();

export const initialCarModelState: CarModelState = carModelAdapter.getInitialState({
  loaded: false,
  loading: false,
})
export const initialState: CarModel[] = [{
  id: 0,
  name: "null"
}]

export const carReducer = createReducer(
  initialCarModelState,
  on(retrieveCarList, ((state)=> ({
    ...state,
    loading: true,
    loaded: false,
  }))),
  on(retrieveCarListSuccess, (state, {cars}) => {
    return carModelAdapter.setAll(cars, {...state, loading: false, loaded: true})
  }),
)

export const {selectAll} = carModelAdapter.getSelectors()
