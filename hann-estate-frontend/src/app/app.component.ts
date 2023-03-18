import {Component, ViewContainerRef, inject} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from "./utils/dialogComponent/dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/app.component.css']
})
export class AppComponent {
  clickedFlag: boolean = false;
  links = ['home', 'map', 'about'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  animal: string = 'animal1';
  constructor(private dialog: MatDialog) {
  }
  openDialog() {
    const dialogOpened = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '200px'
    });
    dialogOpened.afterOpened().subscribe(() => {
      this.clickedFlag = true;
      console.log("call me disabled")
    })
    dialogOpened.afterClosed().subscribe(() => {
      this.clickedFlag = false;
    })

  }

}
