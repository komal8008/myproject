import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { PlamsgComponent } from './plamsg/plamsg.component';
import { VissionComponent } from './vission/vission.component';
import { DepartmentComponent } from './department/department.component';
import { RecruiterComponent } from './recruiter/recruiter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,

    PlamsgComponent,

    VissionComponent,

    DepartmentComponent,

    RecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
