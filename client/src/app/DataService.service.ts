import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

constructor(private http: HttpClient) { }
  private airports = 'http://localhost:5000/home/search/';

  getAirports(query: string) {
    return this.http.get(this.airports + query);
  }

}
