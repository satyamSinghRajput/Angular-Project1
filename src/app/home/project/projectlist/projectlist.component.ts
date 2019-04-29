import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from './../../../utils/service/data.service';


@Component({
    selector: 'app-projectlist',
    templateUrl: './projectlist.component.html',
    styleUrls: ['./projectlist.component.css']
  })

export class ProjectlistComponent implements OnInit {
    message: string;
    constructor ( private dataService: DataService , private route: ActivatedRoute, private router: Router) {}
    projectdescribe = [];

ngOnInit () {
    const data = this.dataService.getprojectdescribeList();
    this.projectdescribe = data;
}
  addProj () {
    this.router.navigate(['/project/addproject']);
}
gotoedit(proj) {
    this.router.navigate(['/project/addproject/' + proj.projectname]);
  }
}
