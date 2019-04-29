import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from './../../../utils/service/data.service';

@Component({
    selector: 'app-addproject',
    templateUrl: './addproject.component.html',
    styleUrls: ['./addproject.component.css']
  })

export class AddprojectComponent implements OnInit {
    message: string;
    projectname: string;
    projData = {projectname: '', projectbudget: '', clientname: '', projecttask: '',
    };
    constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {
      this.route.params.subscribe(params => {
        const paramCode: any = params;
        if (paramCode.projectname) {
          this.projectname = paramCode.projectname;
          const projectdescribe = this.dataService.getprojectdescribeList();
          for (let count = 0; count < projectdescribe.length; count++) {
            if (projectdescribe[count].projectname === this.projectname) {
            this.projData.projectname = projectdescribe[count].projectname;
            this.projData.projectbudget = projectdescribe[count].projectbudget;
            this.projData.clientname = projectdescribe[count].clientname;
            this.projData.projecttask = projectdescribe[count].projecttask;
            break;
            }
          }
        }
      });
    }
    submit() {
      const projectdescribe: any = this.dataService.getprojectdescribeList();
      // if (this.projData.name === '') {
        if (this.projectname) {
        // if in edit mode
        for (let count = 0; count < projectdescribe.length; count++) {
          if (projectdescribe[count].projectname === this.projData.projectname) {
            projectdescribe[count].projectname = this.projData.projectname;
            projectdescribe[count].projectbudget = this.projData.projectbudget;
            projectdescribe[count].clientname = this.projData.clientname;
            projectdescribe[count].projecttask = this.projData.projecttask;
          }
        }
      } else {
        projectdescribe.push(this.projData);
      }
      this.dataService.setprojectdescribeList(projectdescribe);
      this.router.navigate(['/project']);
    }
}
