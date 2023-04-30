import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {CallMeComponent} from "../callMeComponent/callMe.component";
import {DialogData} from "../Types/Dialog";

@Injectable()
export class DialogService {
    constructor(private matDialog: MatDialog) {
    }
    openDialog(component: any, dialog: DialogData) {
        this.matDialog.open(component, {...dialog.config, data: dialog.data});
    }

}
