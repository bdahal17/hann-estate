import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  templateUrl: 'callMe.component.html',
  styleUrls: ['callMe.component.css']
})
export class CallMeComponent {
  constructor(private dialogRef: MatDialogRef<CallMeComponent>) {
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
