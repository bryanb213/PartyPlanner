import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

constructor(private http: HttpClient) { }
  private airportsUrl = 'http://localhost:5000/home/search/';
  private airportById = 'http://localhost:5000/home/details/';


  getAirports(query: string) {
    return this.http.get(this.airportsUrl + query);
  }

  getAirportById(id: number) {
    return this.http.get(this.airportById + id);
  }

  getTodayForecast(query: string) {
    const todayWeather = this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=e7f6b2ade7d4404e80c9d27e0ad3d479&units=Imperial`);
    return todayWeather;
  }
}
