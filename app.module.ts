import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { TrainingComponent } from './training/training.component';
const app:Routes = [
  {
    path:'train',
    component:TrainingComponent
  },
  {
    path:'car',
    component:CarComponent
  },
  {
    path:'elec',
    component:ElectronicsComponent
  },
  
  {
    path:'employee/:id',
    component:EmployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CarComponent,
    ElectronicsComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
