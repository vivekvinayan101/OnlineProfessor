import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-professor',
  templateUrl: './view-professor.component.html',
  styleUrls: ['./view-professor.component.css']
})
export class ViewProfessorComponent implements OnInit{

  profId:any
  profData:any
  email:any


  constructor(private ds:DataService, private ar: ActivatedRoute){

  }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.profId=data["id"]

      this.ds.professorDetails(this.profId).subscribe((data:any)=>{
        this.profData=data["data"]
        console.log(this.profData);
        
      })
    })
    
  }

  bookClass(){
    this.email=JSON.parse(localStorage.getItem('currentAc') || " ")
    this.ds.bookClass(this.profData,this.email).subscribe((result:any)=>{
      alert(result.message)
    },
    result => { alert(result.error.message) })
  }
}
