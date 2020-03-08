import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    DashboardComponent
  ]
})
export class CoreModule { }
