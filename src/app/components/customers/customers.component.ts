import { Component, OnInit } from '@angular/core';
import { customerData,cancelData } from 'src/app/api/customerAPI';
import { Orderstypes } from 'src/app/interfaces/orderstypes';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerData:Orderstypes[] = [];
  cancelData:Orderstypes[]=[];
  isLoading:boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.customerData = customerData;
    this.cancelData=cancelData;

    setTimeout(() => {
      this.isLoading = false;
     }, 1000);

  }

}
