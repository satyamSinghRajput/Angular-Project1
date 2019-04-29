import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { DataService } from './../../../utils/service/data.service';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employeedetails.component.html',
    styleUrls: ['./employeedetails.component.css']
  })
  export class EmployeedetailComponent implements OnInit {
    message: string;
    employeeCode: string;
    empData = {name: '', employeeCode: '', joinDate: '', empDesignation: '',
    contactNo: '', email: '', dateOfBirth: '', projectName: '', qualification: ''};
    constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {
      this.route.params.subscribe(params => {
        const paramCode: any = params;
        if (paramCode.employeeCode) {
          this.employeeCode = paramCode.employeeCode;
          const memberList = this.dataService.getMemberList();
          for (let count = 0; count < memberList.length; count++) {
            if (memberList[count].employeeCode === this.employeeCode) {
            this.empData.name = memberList[count].name;
            this.empData.employeeCode = memberList[count].employeeCode;
            this.empData.joinDate = memberList[count].joinDate;
            this.empData.empDesignation = memberList[count].empDesignation;
            this.empData.contactNo = memberList[count].contactNo;
            this.empData.email = memberList[count].email;
            this.empData.dateOfBirth = memberList[count].dateOfBirth;
            this.empData.projectName = memberList[count].projectName;
            this.empData.qualification = memberList[count].qualification;
            break;
            }
          }
        }
      });
    }
    submit() {
      const memberList: any = this.dataService.getMemberList();
      // if (this.empData.name === '') {
        if (this.employeeCode) {
        // if in edit mode
        for (let count = 0; count < memberList.length; count++) {
          if (memberList[count].employeeCode === this.empData.employeeCode) {
            memberList[count].name = this.empData.name;
            memberList[count].employeeCode = this.empData.employeeCode;
            memberList[count].joinDate = this.empData.joinDate;
            memberList[count].empDesignation = this.empData.empDesignation;
            memberList[count].contactNo = this.empData.contactNo;
            memberList[count].email = this.empData.email;
            memberList[count].projectName = this.empData.projectName;
            memberList[count].qualification = this.empData.qualification;
          }
        }
      } else {
        memberList.push(this.empData);
      }
      this.dataService.setMemberList(memberList);
      this.router.navigate(['/employee']);
    }
  }

