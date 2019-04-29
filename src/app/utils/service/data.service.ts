import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private selectedYear = '';
  private dateArr = [
    {year: '2008', data: [{datefrom: '12/2/2008', dateto: '12/5/2008', type: 'planned', applyto: 'Going Home', status: 'Approved'}] },
    {year: '2009', data: [{datefrom: '11/2/2009', dateto: '15/2/2009', type: 'planned', applyto: 'Going Home', status: 'Approved'}] },
    {year: '2010', data: [{datefrom: '21/11/2010', dateto: '21/11/2010', type: 'unplanned', applyto: 'Going Home', status: 'Approved'}] },
    {year: '2011', data: [{datefrom: '15/3/2011', dateto: '19/3/2011', type: 'planned', applyto: 'Going Home', status: 'Approved'}] },
    {year: '2012', data: [{datefrom: '18/5/2012', dateto: '20/5/2012', type: 'planned', applyto: 'Going Home', status: 'Approved'}] },
    {year: '2013', data: [{datefrom: '22/8/2013', dateto: '25/8/2013', type: 'planned', applyto: 'Going Home', status: 'DisApproved'}] },
    {year: '2014', data: [{datefrom: '15/3/2011', dateto: '19/3/2011', type: 'planned', applyto: 'Going Home', status: 'Approved'}] },
    {year: '2015', data: [{datefrom: '18/5/2012', dateto: '20/5/2012', type: 'planned', applyto: 'Going Home', status: 'Approved'}] },
    {year: '2016', data: [{datefrom: '22/8/2013', dateto: '25/8/2013', type: 'planned', applyto: 'Going Home', status: 'DisApproved'}] },
    {year: '2017', data: [{datefrom: '15/3/2011', dateto: '19/3/2011', type: 'planned', applyto: 'Going Home', status: 'Approved'}] },
    {year: '2018', data: [{datefrom: '', dateto: '', type: '', applyto: '', status: ''}] },
    {year: '2019', data: [{datefrom: '', dateto: '', type: '', applyto: '', status: ''}] },
    {year: '2020', data: [{datefrom: '', dateto: '', type: '', applyto: '', status: ''}] },
    {year: '2021', data: [{datefrom: '', dateto: '', type: '', applyto: '', status: ''}] }
   ];
  private projectdescribe = [
    {projectname: 'ABC', projectbudget: '1 year', clientname: 'XYZ', projecttask: 'AAA'},
    {projectname: 'ASD', projectbudget: '6 Month', clientname: 'ASDF', projecttask: 'GGG'},
    {projectname: 'ZXC', projectbudget: '2 year', clientname: 'QWER', projecttask: 'KKK'},
    {projectname: 'ASA', projectbudget: '3 Year', clientname: 'ASDF', projecttask: 'LLL'}
   ];
  private memberList = [
        {name: 'John', employeeCode: 'emp01', joinDate: '01 Jan 2017', dateOfBirth: '01 Jan 1990', empDesignation: '' , contactNo: '',
         email : '', projectName: '', qualification: '', timeIn : '9:00AM', timeOut : '7:00PM', status : 'P'},
        {name: 'Michael', employeeCode: 'emp02', joinDate: '07 Feb 2017', dateOfBirth: '01 Jan 1991', empDesignation: '' , contactNo: '',
        email : '', projectName: '', qualification: '', timeIn : '', timeOut : '', status : 'A'},
        {name: 'Albert', employeeCode: 'emp03', joinDate: '09 Mar 2017', dateOfBirth: '01 Jan 1992', empDesignation: '' , contactNo: '',
        email : '', projectName: '', qualification: '', timeIn : '10:00AM', timeOut : '8:30PM', status : 'P'},
        {name: 'Delta', employeeCode: 'emp04', joinDate: '11 Dec 2017', dateOfBirth: '01 Jan 1993', empDesignation: '' , contactNo: '',
        email : '', projectName: '', qualification: '', timeIn : '11:10AM', timeOut : '5:30PM', status : 'P'},
          // attendance : [
          //   {date: '2018-02-01', timeIn : '11:10AM', timeOut : '5:30PM', status : 'P'},
          //   {date: '2018-02-17', timeIn : '11:10AM', timeOut : '5:30PM', status : 'P'}
          // ]
        // },
        {name: 'Kumar', employeeCode: 'emp05', joinDate: '10 Oct 2017', dateOfBirth: '01 Jan 1994', empDesignation: '' , contactNo: '',
        email : '', projectName: '', qualification: '', timeIn : '11:10AM', timeOut : '5:30PM', status : 'P', },
      ];
  constructor() { }
  getSelectedYear() {
    return this.selectedYear;
  }
  setSelectedYear(year) {
    this.selectedYear = year;
  }
  getdateArrList() {
    return this.dateArr;
  }
  setdateArrList(dateArr) {
    this.dateArr = dateArr;
  }
  getprojectdescribeList() {
    return this.projectdescribe;
  }
  setprojectdescribeList(projectdescribe) {
    const updatedProjectdescribe = [];
    for (let count = 0; count < projectdescribe.length; count++) {
      updatedProjectdescribe.push(
        {
          projectname: (projectdescribe[count].projectname ? projectdescribe[count].projectname : (this.projectdescribe[count].projectname ? this.projectdescribe[count].projectname : '')),
          projectbudget: (projectdescribe[count].projectbudget ? projectdescribe[count].projectbudget : (this.projectdescribe[count].projectbudget ? this.projectdescribe[count].projectbudget : '')),
          clientname: (projectdescribe[count].clientname ? projectdescribe[count].clientname : (this.projectdescribe[count].clientname ? this.projectdescribe[count].clientname : '')),
          projecttask: (projectdescribe[count].projecttask ? projectdescribe[count].projecttask : (this.projectdescribe[count].projecttask ? this.projectdescribe[count].projecttask : '')),
          // projectname: (projectdescribe[count].projectname ? projectdescribe[count].projectname : (this.projectdescribe[count].projectname ? this.projectdescribe[count].projectname : '')),
          // projectname: (projectdescribe[count].projectname ? projectdescribe[count].projectname : (this.projectdescribe[count].projectname ? this.projectdescribe[count].projectname : '')),
          // projectname: (projectdescribe[count].projectname ? projectdescribe[count].projectname : (this.projectdescribe[count].projectname ? this.projectdescribe[count].projectname : '')),
        }
      );
    }
    this.projectdescribe = updatedProjectdescribe;
  }
  getMemberList() {
    return this.memberList;
  }
  setMemberList(memberList) {
    const updatedMemberList = [];
    for (let count = 0; count < memberList.length; count++) {
      updatedMemberList.push(
        {
          name: (memberList[count].name ? memberList[count].name : (this.memberList[count].name ? this.memberList[count].name : '')),
          employeeCode: (memberList[count].employeeCode ? memberList[count].employeeCode : (this.memberList[count].employeeCode ? this.memberList[count].employeeCode : '')),
          joinDate: (memberList[count].joinDate ? memberList[count].joinDate : (this.memberList[count].joinDate ? this.memberList[count].joinDate : '')),
          dateOfBirth: (memberList[count].dateOfBirth ? memberList[count].dateOfBirth : (this.memberList[count].dateOfBirth ? this.memberList[count].dateOfBirth : '')),
          empDesignation: (memberList[count].empDesignation ? memberList[count].empDesignation : (this.memberList[count].empDesignation ? this.memberList[count].empDesignation : '')),
          contactNo: (memberList[count].contactNo ? memberList[count].contactNo : (this.memberList[count].contactNo ? this.memberList[count].contactNo : '')),
          email : (memberList[count].email ? memberList[count].email : (this.memberList[count].email ? this.memberList[count].email : '')),
          projectName: (memberList[count].projectName ? memberList[count].projectName : (this.memberList[count].projectName ? this.memberList[count].projectName : '')),
          qualification: (memberList[count].qualification ? memberList[count].qualification : (this.memberList[count].qualification ? this.memberList[count].qualification : '')),
          timeIn : (memberList[count].timeIn ? memberList[count].timeIn : (this.memberList[count].timeIn ? this.memberList[count].timeIn : '')),
          timeOut : (memberList[count].timeOut ? memberList[count].timeOut : (this.memberList[count].timeOut ? this.memberList[count].timeOut : '')),
          status : (memberList[count].status ? memberList[count].status : (this.memberList[count].status ? this.memberList[count].status : ''))
        }
      );
    }
    this.memberList = updatedMemberList;
  }

}

