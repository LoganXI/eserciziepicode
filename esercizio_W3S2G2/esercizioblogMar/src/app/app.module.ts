import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { InactivePostComponent } from './pages/inactive-post/inactive-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { FormsModule } from '@angular/forms';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { Route } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'active',
    component: ActivePostComponent,
    title: 'Active Posts',
  },
  {
    path: 'inactive',
    component: InactivePostComponent,
    title: 'Inactive Posts',
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent,
    title: 'Post Detail',
  },
  {
    path: 'singlepost',
    component: SinglePostComponent,
    title: 'Single Post',
  },
  {
    path: '**',
    redirectTo: '',
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActivePostComponent,
    InactivePostComponent,
    PostDetailsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
