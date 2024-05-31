import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserstodoComponent } from './pages/userstodo/userstodo.component';
import { CompletedComponent } from './pages/completed/completed.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'users',
    component: UserstodoComponent,
    title: 'Users ToDos',
  },
  {
    path: 'completed',
    component: CompletedComponent,
    title: 'Completed ToDos',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
