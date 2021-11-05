import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'home', component : WelcomeComponent},
      {path : '', component : WelcomeComponent, pathMatch : 'full'},
      {path : '**', component : WelcomeComponent, pathMatch : 'full'}
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
