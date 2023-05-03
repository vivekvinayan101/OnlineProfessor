import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''

  password = ''



  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {

  }

  LoginForm = this.fb.group({

    email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]

  })

  ngOnInit(): void {

  }

  login() {

    var email = this.LoginForm.value.email
    var password = this.LoginForm.value.password

    if (this.LoginForm.valid) {
      this.ds.login(email, password).subscribe((result: any) => {
        localStorage.setItem("firstname", JSON.stringify(result.firstname))
        localStorage.setItem("lastname", JSON.stringify(result.lastname))
        localStorage.setItem("currentAc", JSON.stringify(result.currentAc))
        localStorage.setItem("token", JSON.stringify(result.token))

        alert(result.message)
        this.router.navigateByUrl('dashboard')
      },
        result => { alert(result.error.message) }
      )
    } else {
      alert("invalid form")
    }

  }

}
