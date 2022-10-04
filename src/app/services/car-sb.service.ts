import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CarModel} from "../models/car";

@Injectable({
  providedIn: 'root'
})
export class CarSbService {
  private cars: CarModel[] = [];
  constructor(private httpClient: HttpClient) {
    this.restGetEntries().subscribe(
      responseData => this.cars = responseData,
      error => ErrorHandler.apply(error)
    )
  }

  findAll(): CarModel[]{
    return this.cars;
  }

  determineIfPostOrPut(car: CarModel){
    for (let i = 0; i < this.cars.length; i++){
      if (car.id == this.cars[i].id){
        this.restPutCar(car)
        return;
      }
      else this.restPostCar(car)
    }
  }
  storeGetCars(): Observable<CarModel[]>{
    return this.httpClient.get<CarModel[]>(`http://localhost:8082/car`)
      .pipe(
        map((cars)=>
        cars || [])
      )
  }

  restGetEntries(): Observable<CarModel[]>{
    return this.httpClient.get<CarModel[]>(`http://localhost:8082/car`)
      .pipe(
        map(responseData => {
          const carArray: CarModel[] = [];

          for (const key in responseData){
            carArray.push(responseData[key])
          }
          return carArray;
        })
      )
  }

  restPostCar(car: CarModel){
    this.httpClient.post<CarModel>(`http://localhost:8082/car`, JSON.stringify(car), {headers: new HttpHeaders(
        {'Content-Type': 'application/json',
        }
      ), responseType: 'json', observe: 'response'}).subscribe(responseData => {
      console.log(responseData)
    })
  }

  restPutCar(car: CarModel){
    return this.httpClient.put<CarModel>(`http://localhost:8082/car/${car.id}`, car, {headers: new HttpHeaders(
        {'Content-Type': 'application/json'}
      ), responseType: 'json', observe: 'response'
    }).subscribe(
      responseData =>{
        console.log(responseData)
      }
    )
  }
}
