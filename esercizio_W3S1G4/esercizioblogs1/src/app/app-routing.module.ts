import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path: 'active',
    component: ActivePostsComponent,
    title:'Active Posts'
  },
  {
    path: 'inactive',
    component: InactivePostsComponent,
    title:'Inactive Posts'
  },
  {
    path:'detail/:id',
    component:DetailComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
