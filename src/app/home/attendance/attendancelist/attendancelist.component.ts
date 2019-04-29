import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../../utils/service/data.service';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-attendancelist',
    templateUrl: './attendancelist.component.html',
    styleUrls: ['./attendancelist.component.css']
  })

export class AttendancelistComponent implements OnInit {
  message: string;
  constructor(private dataService: DataService , private router: Router) { }
  public calenderDate;
  public memberList = [];
  public gridEmpAtten = [];
  ngOnInit () {
      const data = this.dataService.getMemberList();
      this.memberList = data;
      this.gridEmpAtten = data;
  }
  gotoedit(empedit) {
    this.router.navigate(['/attendance/attendanceedit/' + empedit.employeeCode]);
  }
}
