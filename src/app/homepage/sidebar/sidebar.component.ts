import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import {DataService} from './../../service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  value: number = 1300;
  highValue: number = 6000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };

  constructor(private color:DataService) {
  }

  ngOnInit(): void {
  }

  colorFilter(event) {
    this.color.addFilters(event.target.value)

  }
}