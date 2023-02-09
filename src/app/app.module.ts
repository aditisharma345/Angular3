import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from '../app/Directory-injection/employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../app/Directory-injection/employee-detail/employee-detail.component';
import { EmployeeService } from '../app/Directory-injection/employee.service';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
