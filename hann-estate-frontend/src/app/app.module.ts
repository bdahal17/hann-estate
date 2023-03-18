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
import {MapComponent} from "./utils/mapComponent/map.component";
import {HomeComponent} from "./utils/homeComponent/home.component";
import {DialogComponent} from "./utils/dialogComponent/dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'map', component: MapComponent},
  { path: 'about', component: MapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    DialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
