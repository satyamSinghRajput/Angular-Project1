import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../../utils/service/data.service';
import { FormsModule } from '@angular/forms';

import { TabsetComponent } from 'ngx-bootstrap';

@Component({
    selector: 'app-leavelist',
    templateUrl: './leavelist.component.html',
    styleUrls: ['./leavelist.component.css']
  })

export class LeavelistComponent implements OnInit {
    dateArr = [];
    constructor ( private dataService: DataService , private router: Router) {}
    ngOnInit () {
        const data = this.dataService.getdateArrList();
        this.dateArr = data;
    }
    apply () {
        this.router.navigate(['/leaves/leaveapply']);
    }
    // gotoedit(leaves) {
    //     this.router.navigate(['/leaves/applyleave/' + leavesData.datefrom]);
    //   }
    onYearTabSelect (data) {
        this.dataService.setSelectedYear(data.year);
    }

}

