import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot([
          { path: 'log-in', component: LogInComponent },
          { path: 'sign-up', component: SignUpComponent },
          { path: '', component: LandingComponent },
          { path: '**', redirectTo: '/' }
      ]),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
