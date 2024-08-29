import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Bike } from '../../interfaces/bike.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  //private http = inject(HttpClient);
  constructor(private http: HttpClient) {

   }
  getBikes(): Observable<Bike[]>{
    return this.http.get<Bike[]>('http://localhost:3000/bikes');
  }

}
