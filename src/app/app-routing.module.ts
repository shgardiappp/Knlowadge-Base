import { CallsComponent } from './components/calls/calls.component';
import { HomeComponent } from './components/home/home.component';
import { CouriersComponent } from './components/couriers/couriers.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersdataviewComponent } from './components/ordersdataview/ordersdataview.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FooddataviewComponent } from './components/fooddataview/fooddataview.component';
import { CompenstaionComponent } from './components/compenstaion/compenstaion.component';
import { FoodComponent } from './components/food/food.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
//import { LoginComponent } from './components/login/login.component';
//import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' ,  component:HomeComponent},
  {path:'food' ,  component:FoodComponent},
  {path:'orders' ,  component:OrdersComponent},
  {path:'compenstaion' ,  component:CompenstaionComponent},
  {path:'food/:type' ,  component:FooddataviewComponent},
  {path:'orders/:type' ,  component:OrdersdataviewComponent},

  {path:'customers' ,  component:CustomersComponent},
  {path:'couriers' ,  component:CouriersComponent},
  {path:'calls' ,  component:CallsComponent},

  //{path:'login' , component:LoginComponent},
  //{path:'register' , component:RegisterComponent},



  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
