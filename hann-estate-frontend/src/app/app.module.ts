import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTabsModule} from "@angular/material/tabs";
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from "./mapComponent/map.component";
import {HomeComponent} from "./homeComponent/home.component";
import {CallMeComponent} from "./callMeComponent/callMe.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {EmailComponent} from "./emailComponent/email.component";
import {DialogService} from "./services/dialog.service";
import {EmailService} from "./services/email.service";
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Map', component: MapComponent},
  { path: 'Testimonial', component: MapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    CallMeComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [RouterModule],
  providers: [DialogService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
