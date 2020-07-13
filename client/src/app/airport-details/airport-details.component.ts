import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../DataService.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport-details.component.html',
  styleUrls: ['./airport-details.component.css']
})
export class AirportDetailsComponent implements OnInit {
  todaysWeather$: Observable<any>;
  airportDetails$: Observable<any>;

  query: '';
  id: number;


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.query = history.state.city;
    this.id = history.state.Id;

    this.todaysWeather$ = this.dataService.getTodayForecast(this.query);
    this.airportDetails$ = this.dataService.getAirportById(this.id);

    this.dataService.getAirportById(this.id).subscribe(res => console.log(res));
    this.dataService.getTodayForecast(this.query).subscribe(res => console.log(res));
  }


}
