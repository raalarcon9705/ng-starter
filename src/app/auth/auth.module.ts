import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { HttpClientModule } from '@angular/common/http';
import { InputsModule, IconsModule, CardsModule, InputUtilitiesModule, ButtonsModule, WavesModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InputsModule,
    InputUtilitiesModule,
    ButtonsModule,
    CardsModule,
    WavesModule,
    IconsModule,
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
