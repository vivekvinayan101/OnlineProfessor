import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getToken() {
    //access token
    const token = JSON.parse(localStorage.getItem("token") || "")
    // generate header 
    let headers = new HttpHeaders()
    if (token) {
    //append token in headers
    option.headers=headers.append("access_token",token)
    }
    return option
  }

  

  login(email: any, password: any) {

    const data = {
      email,
      password
    }

    return this.http.post("http://localhost:3000/login", data)

  }

  register(firstname: any, lastname: any, email: any, password: any) {
    //create body data for API req
    const data = {
     firstname,
     lastname,
     email,
     password
    }

    return this.http.post("http://localhost:3000/register", data)
  }

  viewProfessors(){
    return this.http.get("http://localhost:3000/viewProfessors")
  }

  professorDetails(profId:any){
    const data={
      profId
    }
    return this.http.post("http://localhost:3000/ProfessorDetails", data)
  }

  bookClass(profData:any,email:any){
    const data={
      profData,
      email
    }

    return this.http.post("http://localhost:3000/bookClass", data,this.getToken())

  }

  bookingHistory(email:any){
    const data={
      email
    }
    return this.http.post("http://localhost:3000/bookingHistory",data,this.getToken())
  }

}
