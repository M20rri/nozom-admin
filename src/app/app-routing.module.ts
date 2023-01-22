import { CvFormComponent } from './cv-form/cv-form.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvGridComponent } from './cv-grid/cv-grid.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv-list', component: CvGridComponent },
  { path: 'cv-details/:id', component: CvDetailComponent },
  { path: 'create-cv', component: CvFormComponent },
  { path: 'update-cv/:id', component: CvFormComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
