import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';







const routes: Routes = [{path:'home', component: HomeComponent},
  { path: 'societe', loadChildren: () => import('./societe/societe.module').then(m => m.SocieteModule) },
  {path:'', redirectTo: '/home' , pathMatch:'full'},
  { path: 'categorie', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule) },
  { path: 'projet', loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) }


 ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule { }
