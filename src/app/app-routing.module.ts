import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RandonneeComponent } from './randonnee/randonnee.component';
import { AddRandComponent } from './add-rand/add-rand.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'randonnee', component: RandonneeComponent},
  {path: 'addRand', component: AddRandComponent},
  {path: 'user', component: UserComponent},
  {path: 'addUser', component: AddUserComponent},
 ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule { }
