import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;
  slideValue;

  foods = [
    {value: 'steak-0', viewValue: '60,000'},
    {value: 'pizza-1', viewValue: '100000'},
    {value: 'tacos-2', viewValue: '200000'}
  ];
  constructor() { }
  value: number = 150000;
  newValue:number=60000
  highValue:number = 0
  newHighValue;
  options: Options = {
    floor: 0,
    ceil: 300000
  };

  newOptions: Options = {
    floor: 0,
    ceil: 10000000
  };
  ngOnInit(): void {
      }

}
