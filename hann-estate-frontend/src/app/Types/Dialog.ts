import {Email} from "./Email";

export interface DialogData { // <--- this is the interface
  name: string;
  data: {
    emailData?: Email,
    phoneNumber: string
  },
  config: {}
}
