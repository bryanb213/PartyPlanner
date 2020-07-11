import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../DataService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  query = '';
  //KEY =  e7f6b2ade7d4404e80c9d27e0ad3d479
  airports: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  getAirports() {
    this.airports = this.dataService.getAirports(this.query);
    console.log(this.airports);
    return this.airports;
  }

}
