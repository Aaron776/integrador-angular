import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: UserModel[] = [];

  constructor(private rout: Router, private EmployeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.synch();
  }

  synch(): void {
    this.EmployeeService.getAllEmployeeByArea().
      subscribe(result => {
        this.employees = result;
      });
  }

  navigateToEmployee(employee: UserModel): void {
    this.rout.navigate(['/activity/' + employee.ci + '/' + employee.name + '/' + employee.lastName]);

  }



}
