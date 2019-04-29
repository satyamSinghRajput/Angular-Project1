import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { EmployeeComponent } from './home/employee/employee.component';
import { AttendanceComponent } from './home/attendance/attendance.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LeavesComponent } from './home/leaves/leaves.component';
import {ProjectComponent } from './home/project/project.component';
// import { TaskComponent } from './home/task/task.component';
import { EmployeelistingComponent } from './home/employee/employeelisting/employeelisting.component';
import { EmployeedetailComponent } from './home/employee/employeedetails/employeedetails.component';
import { DataService } from './utils/service/data.service';
import {FormsModule} from '@angular/forms';
import { AttendancelistComponent } from './home/attendance/attendancelist/attendancelist.component';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CalendarModule } from 'angular-calendar';
import {AttendanceeditComponent} from './home/attendance/attendanceEdit/attendanceedit.component';
import {AddprojectComponent} from './home/project/addproject/addproject.component';
import { ProjectlistComponent } from './home/project/projectlist/projectlist.component';
import { LeavelistComponent } from './home/leaves/leavelist/leavelist.component';
import {LeaveapplyComponent} from './home/leaves/leaveapply/leaveapply.component';
import {LoginComponent} from './login/login.component';
import {OnlyLoggedInUsersGuard} from './utils/service/authGuard.service';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    AttendanceComponent,
    HomepageComponent,
    LeavesComponent,
    ProjectComponent,
    // TaskComponent,
    EmployeelistingComponent,
    EmployeedetailComponent,
    AttendancelistComponent,
    AttendanceeditComponent,
    AddprojectComponent,
    ProjectlistComponent,
    LeavelistComponent,
    LeaveapplyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SliderModule,
    CalendarModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [DataService, OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
