import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cashData , cancelledOnline , cancelledOffline ,
   courierOffline , courierOnline} from 'src/app/api/foodAPI';
import { Multitabledata } from 'src/app/interfaces/multitabledata';
import { Tabledata } from 'src/app/interfaces/tabledata';

@Component({
  selector: 'app-fooddataview',
  templateUrl: './fooddataview.component.html',
  styleUrls: ['./fooddataview.component.scss']
})
export class FooddataviewComponent implements OnInit {

  foodType:string = '';

  allTableData:Tabledata[] = [];

  cancelledOnlineData:Tabledata[] = [];
  cancelledOfflineData:Multitabledata[] = [];

  courierOnlineData:Tabledata[] = [];
  courierOfflineData:Tabledata[] = [];

  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');

    switch(type){
      case 'cash' : this.allTableData = cashData; this.foodType = 'cash'; break;
      
      case 'cancelled': 
      this.cancelledOnlineData = cancelledOnline; 
      this.foodType = 'cancelled';
     
      break;
      case 'courier':
        this.courierOnlineData = courierOnline; 
        this.foodType = 'courier';
        break;
    }
  }
}