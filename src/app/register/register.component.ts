import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  firstname=''

  lastname=''

  email=''

  password=''

  constructor(private ds:DataService, private fb:FormBuilder, private router:Router){

  }

  RegisterForm=this.fb.group({
    firstname:['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
    lastname:['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]

  })



  ngOnInit(): void {
    
  }

  register(){
    var firstname=this.RegisterForm.value.firstname
    var lastname=this.RegisterForm.value.lastname
    var email=this.RegisterForm.value.email
    var password=this.RegisterForm.value.password

    if(this.RegisterForm.valid){
      this.ds.register(firstname,lastname,email,password).subscribe((result:any)=>{
        alert(result.message)
        this.router.navigateByUrl("login")
      },
      result=>{
        alert(result.error.message)
        this.router.navigateByUrl("login")
      }
      )
  
      
      
    }else{
      alert("Invalid Form")
    }
  }
  
}
