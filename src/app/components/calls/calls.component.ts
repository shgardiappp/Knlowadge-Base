import { Tabledata } from './../../interfaces/tabledata';
import { CallsData } from './../../interfaces/calls-data';
import { Component, OnInit } from '@angular/core';
import { generalData  } from 'src/app/api/callsAPI';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {

  generalData:Tabledata[] = [];
  

  constructor() { }

  ngOnInit(): void {
    this.generalData = generalData;
  }

}
