import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompletedComponent } from './pages/completed/completed.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { HeaderComponent } from './comp/header/header.component';
import { UserstodoComponent } from './pages/userstodo/userstodo.component';



@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    UserstodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
