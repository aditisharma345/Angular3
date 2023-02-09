import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Directory-injection/employee.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  public employee: any = [];
  constructor(private EmployeeService: EmployeeService) {}
  ngOnInit() {
    this.employee = this.EmployeeService.getEmployees();
  }
}
