import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent} from './home/attendance/attendance.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import {LeavesComponent } from './home/leaves/leaves.component';
import {ProjectComponent } from './home/project/project.component';
// import {TaskComponent } from './home/task/task.component';
import {EmployeelistingComponent } from './home/employee/employeelisting/employeelisting.component';
import {EmployeedetailComponent} from './home/employee/employeedetails/employeedetails.component';
import {AttendancelistComponent} from './home/attendance/attendancelist/attendancelist.component';
import {AttendanceeditComponent} from './home/attendance/attendanceEdit/attendanceedit.component';
import { AddprojectComponent } from './home/project/addproject/addproject.component';
import { ProjectlistComponent } from './home/project/projectlist/projectlist.component';
import { LeavelistComponent } from './home/leaves/leavelist/leavelist.component';
import {LeaveapplyComponent } from './home/leaves/leaveapply/leaveapply.component';
import {LoginComponent } from './login/login.component';
import { OnlyLoggedInUsersGuard } from './utils/service/authGuard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent, children: []},
    {
        path: '',
        component: HomeComponent,
        canActivate: [OnlyLoggedInUsersGuard],
        children: [
            { path: '', component: HomepageComponent },
            { path: 'homepage', component: HomepageComponent },
            { path: 'attendance', component: AttendanceComponent ,
                children: [
                    {path: '', component: AttendancelistComponent},
                    // {path: 'attendanceedit', component: AttendanceeditComponent},
                    {path: 'attendanceedit/:employeeCode', component: AttendanceeditComponent},
                ]
             },
            { path: 'employee', component: EmployeeComponent,
                children: [
                    {path: '', component: EmployeelistingComponent},
                    {path: 'employeedetail', component: EmployeedetailComponent},
                    // {path: 'employeedetail/:employeeCode', component: EmployeedetailComponent},
                ]
            },
            { path: 'leaves', component: LeavesComponent,
            children: [
                {path: '', component: LeavelistComponent },
                {path: 'leaveapply', component: LeaveapplyComponent },
                // {path: 'leaveapply/:datefrom', component: LeaveapplyComponent },
            ]
        },
            { path: 'project', component: ProjectComponent ,
            children: [
                {path: '', component: ProjectlistComponent },
                {path: 'addproject', component: AddprojectComponent},
                {path: 'addproject/:projectname', component: AddprojectComponent},
            ]
        },
            // { path: 'task', component: TaskComponent},
        ]
    },
    // { path: '',   redirectTo: '/homepage', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
