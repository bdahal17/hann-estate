import {Component, ViewContainerRef, inject, HostListener, Renderer2, ElementRef, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CallMeComponent} from "./callMeComponent/callMe.component";
import {DialogService} from "./services/dialog.service";
import {EmailComponent} from "./emailComponent/email.component";
import {MapComponent} from "./mapComponent/map.component";
import {HomeComponent} from "./homeComponent/home.component";
import {DialogData} from "./Types/Dialog";
import {Email} from "./Types/Email";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/app.component.css']
})
export class AppComponent {
  clickedFlag: boolean = false;
  links = ['Home', 'Map', 'Testimonial'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

 emailData: Email = {
   email: "", message: "", name: ""
 }

 scrollDown: boolean = false;

  ComponentType = {
    'email-component': EmailComponent,
    'dialog-component': CallMeComponent,
    'app-root': AppComponent,
    'map-component': MapComponent,
    'home-component': HomeComponent,
  }
  private previousPosition: number = 0;

  constructor(private dialog: MatDialog, private dialogService: DialogService,
              private router: Router, private dom: Renderer2, private ele: ElementRef) {
  }

  ngOnInit() {
   // this.openDialog(this.ComponentType["email-component"]);
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    if(this.previousPosition < window.scrollY) {
      this.scrollDown = true;
      console.log("scrolling down")

    } else {
      this.scrollDown = false;
      console.log("scrolling up")
    }
    this.previousPosition = window.scrollY;
  }

  openDialog(component: any) {
    this.dialogService.openDialog(component, {name: 'est', data: {
        emailData: this.emailData,
        phoneNumber: '1234567890'
      }, config: {
        width: '600px',
        height: '300px',
      }});
  }
}
