import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfessionalPageComponent } from '../professional-page/professional-page.component';
import { PersonalPageComponent } from '../personal-page/personal-page.component';

const routes: Routes = [
  
 
  { path: '', component: ProfessionalPageComponent},
  { path: 'personal-details', component: PersonalPageComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }
