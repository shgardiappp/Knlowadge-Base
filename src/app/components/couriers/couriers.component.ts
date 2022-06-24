import { courierData,generalData,compensationData } from './../../api/couriersAPI';
import { Component, OnInit } from '@angular/core';
import { Orderstypes } from 'src/app/interfaces/orderstypes';
import { Tabledata } from 'src/app/interfaces/tabledata';


@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.scss']
})
export class CouriersComponent implements OnInit {

  courierData: Orderstypes[] = [];
  generalData: Tabledata[] = [];
  compensationData:Tabledata[]=[];
  isLoading: boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.courierData = courierData;
    this.generalData = generalData;
    this.compensationData=compensationData;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

  }

}
