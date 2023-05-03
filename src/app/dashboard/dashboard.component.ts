import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

  professorList:any

  user:any
  name:any

  constructor(private ds:DataService){

  }

  ngOnInit(): void {
    this.ds.viewProfessors().subscribe((data:any)=>{
      this.professorList=data["data"]
     

      this.user=JSON.parse(localStorage.getItem('currentAc')||" ")

      this.name=JSON.parse(localStorage.getItem('firstname')||" ")

      
      
      
      
      
      
    })
  }

}