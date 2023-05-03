import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstname: any
  lastname:any
  email:any
  bookings:any
  constructor(private ds:DataService, private router:Router) {

  }

  ngOnInit(): void {
    
    this.firstname = JSON.parse(localStorage.getItem('firstname') || " ")
    this.lastname = JSON.parse(localStorage.getItem('lastname') || " ")
    this.email = JSON.parse(localStorage.getItem('currentAc') || " ")
      
    this.ds.bookingHistory(this.email).subscribe((data:any)=>{
      this.bookings=data["data"]
      console.log(this.bookings);
      
    })

  }
  logout(){
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
    localStorage.removeItem('currentAc')
    this.router.navigateByUrl('')
  }

  
}
