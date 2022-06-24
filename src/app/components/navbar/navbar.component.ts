
import { Component } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  {

  closeNavbar() {
    $('.navbar-collapse').collapse('hide');
  }



  
  
}
