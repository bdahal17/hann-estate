import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent {
  constructor(private dialogRef: MatDialogRef<DialogComponent>) {
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
