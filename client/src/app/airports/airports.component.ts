import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit, OnChanges {
  @Input()
  data: any;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(){
    console.log('from airports', this.data);
  }

}
