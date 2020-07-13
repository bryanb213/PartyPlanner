import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../DataService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  query = '';
  airports: any;
  show = false;


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  getAirports() {
    this.airports = this.dataService.getAirports(this.query);
    this.show = true;
    return this.airports;
  }

}
