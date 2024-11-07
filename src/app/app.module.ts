import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule
  ],
  declarations: [
      AppComponent,
      HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
