import {Component, inject} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/app.component.css']
})
export class AppComponent {
  links = ['home', 'map'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  constructor() {
  }
}
