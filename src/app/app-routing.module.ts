import { FormEventComponent } from './pages/form-event/form-event.component';
import { AsyncAwaitComponent } from './pages/async-await/async-await.component';
import { HomeComponent } from './pages/home/home.component';
import { PromiseComponent } from './pages/promise/promise.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'promise',
    component: PromiseComponent
  },
  {
    path: 'async-await',
    component: AsyncAwaitComponent
  },
  {
    path: 'form-event',
    component: FormEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
