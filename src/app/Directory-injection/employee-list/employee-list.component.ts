import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Directory-injection/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employee: any = [];
  constructor(private EmployeeService: EmployeeService) {}
  ngOnInit /* ngOnInit() is called once the component has been initialized */() {
    this.employee = this.EmployeeService.getEmployees();
  }
}
