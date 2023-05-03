import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ViewProfessorComponent } from './view-professor/view-professor.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'',component:HomeComponent},
{path:'viewProfessor/:id',component:ViewProfessorComponent},
{path:'dashboard',component:DashboardComponent},
{path:'profile',component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
