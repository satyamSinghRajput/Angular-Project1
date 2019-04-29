import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from './../../../utils/service/data.service';

@Component({
    selector: 'app-leaveapply',
    templateUrl: './leaveapply.component.html',
    styleUrls: ['./leaveapply.component.css']
  })
export class LeaveapplyComponent  implements OnInit {
  message: string;
  datefrom: string;
  leavesData = { datefrom: '', dateto: '', type: '', applyto: '' , status: '' ,
  };
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    const selectedYear = this.dataService.getSelectedYear();
    console.log(selectedYear);
    this.route.params.subscribe(params => {
      const paramCode: any = params;
      if (paramCode.datefrom) {
        this.datefrom = paramCode.datefrom;
        const dateArr = this.dataService.getdateArrList();
        for (let count = 0; count < dateArr.length; count++) {
          if (dateArr[count].data[count].datefrom === this.datefrom) {
            this.leavesData.datefrom = dateArr[count].data[count].datefrom;
            this.leavesData.dateto = dateArr[count].data[count].dateto;
            this.leavesData.type = dateArr[count].data[count].type;
            this.leavesData.applyto = dateArr[count].data[count].applyto;
            this.leavesData.status = dateArr[count].data[count].status;
            break;
          }
        }
      }
    });
  }
  submit() {
    const dateArr: any = this.dataService.getdateArrList();
    const currYear = this.dataService.getSelectedYear();
    for (let count = 0; count < dateArr.length; count++) {
      if (dateArr[count].year === currYear) {
        dateArr[count].data.push(this.leavesData);
      }
    }
    this.dataService.setdateArrList(dateArr);
    this.router.navigate(['/leaves']);
    // const updatedDateArr = {year: year, data: [{datefrom: '', dateto: '', type: '', applyto: '', status: ''}] };
    // for (let count = 0; count < dateArr.length; count++) {
    //   if (dateArr[count].year === year) {
    //     dateArr[count].data.push(
    //       {
    //         datefrom: (dateArr[count].data[count].datefrom ? dateArr[count].data[count].datefrom : (this.dateArr[count].data[count].datefrom ? this.dateArr[count].data[count].datefrom : '')),
    //         dateto: (dateArr[count].data[count].dateto ? dateArr[count].data[count].dateto : (this.dateArr[count].data[count].dateto ? this.dateArr[count].data[count].dateto : '')),
    //         type: (dateArr[count].data[count].type ? dateArr[count].data[count].type : (this.dateArr[count].data[count].type ? this.dateArr[count].data[count].type : '')),
    //         applyto: (dateArr[count].data[count].applyto ? dateArr[count].data[count].applyto : (this.dateArr[count].data[count].applyto ? this.dateArr[count].data[count].applyto : '')),
    //         status: (dateArr[count].data[count].status ? dateArr[count].data[count].status : (this.dateArr[count].data[count].status ? this.dateArr[count].data[count].status : '')),
    //       }
    //     );
    //   }
    // }
  }

}
