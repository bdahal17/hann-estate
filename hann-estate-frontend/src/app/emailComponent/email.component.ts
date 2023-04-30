import {Component, Inject} from "@angular/core";
import {CallMeComponent} from "../callMeComponent/callMe.component";
import {DialogService} from "../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Email} from "../Types/Email";
import {EmailService} from "../services/email.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  public formGroup: FormGroup;
    constructor(@Inject(MAT_DIALOG_DATA) public data: Email, private emailService: EmailService, public formBuilder : FormBuilder) {
        this.formGroup = this.formBuilder.group({
        fullName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required])


      });
    }

    ngOnInit() {
    }

    logSomething() {
    this.emailService.sendEmail(this.data).subscribe((res) => {
      console.log(res);
      console.log("Email sent");
    });
  }


}
