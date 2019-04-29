import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../../utils/service/data.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-employeelisting',
    templateUrl: './employeelisting.component.html',
    styleUrls: ['./employeelisting.component.css']
  })
export class EmployeelistingComponent implements OnInit {
  message: string;
  constructor(private dataService: DataService , private router: Router) { }

  private searchNameid: any = '';
  public memberList = [];
  public gridMemberList = [];
  ngOnInit () {
      const data = this.dataService.getMemberList();
      this.memberList = data;
      this.gridMemberList = data;
  }
  findNameID() {
    this.gridMemberList = [];
    const searchChars = this.searchNameid.toLowerCase();
    for (let count = 0; count < this.memberList.length; count++) {
      const emp = (this.memberList[count]);
      if ((emp.name.toLowerCase().includes(searchChars)) || (emp.employeeCode.toLowerCase().includes(searchChars))) {
        this.gridMemberList.push((this.memberList[count]));
      }
    }
  }
  addEmp() {
    this.router.navigate(['/employee/employeedetail']);
  }
  gotoedit(emp) {
    this.router.navigate(['/employee/employeedetail/' + emp.employeeCode]);
  }
}
