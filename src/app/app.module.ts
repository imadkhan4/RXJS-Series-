import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './pages/promise/promise.component';
import { HomeComponent } from './pages/home/home.component';
import { AsyncAwaitComponent } from './pages/async-await/async-await.component';
import { FormEventComponent } from './pages/form-event/form-event.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    HomeComponent,
    AsyncAwaitComponent,
    FormEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
