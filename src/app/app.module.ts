import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { StrengthMeterModule } from 'ngx-strength-meter';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvGridComponent } from './cv-grid/cv-grid.component';
import { CvFormComponent } from './cv-form/cv-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CvDetailComponent,
    CvGridComponent,
    CvFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule,
    BrowserAnimationsModule,
    ToastNotificationsModule,
    StrengthMeterModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxBootstrapConfirmModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [BsDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
