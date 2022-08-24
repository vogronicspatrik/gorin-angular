import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';


const element_data: Member[] = 
[
{  id:1, firstName:"Patrik", lastName:"Vogronics", dateOfBirth:"1994-05-25", level:"3"},
{  id:2, firstName:"David", lastName:"Mile", dateOfBirth:"2000-02-10", level:"3"},
{  id:3, firstName:"Attila", lastName:"Csiszar", dateOfBirth:"1988-02-16", level:"2"},
{  id:4, firstName:"Balazs", lastName:"Toth", dateOfBirth:"1884-12-19", level:"11"},
{  id:5, firstName:"Gab", lastName:"Cone", dateOfBirth:"1967-07-11", level:"3"},
{  id:6, firstName:"Szabina", lastName:"Toth", dateOfBirth:"2015-04-19", level:"9"}
];



@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor(private memberService: MemberService) { }
  
  //dataSource = new MatTableDataSource(element_data);
  dataSource = new MatTableDataSource<Member[]>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  displayColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'level'];

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(mem => this.dataSource = new MatTableDataSource(mem));
    console.log(this.dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  //console.log(this.members);

  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
