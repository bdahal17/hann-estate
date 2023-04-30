import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {EmailRequest} from "../Types/Request/EmailRequest";
import {EmailResponse} from "../Types/Response/EmailResponse";
import {Observable} from "rxjs";

@Injectable()
export class EmailService {
    constructor(private httpClient: HttpClient) {

    }
    sendEmail(email: EmailRequest) {
        return this.httpClient.post("http://localhost:8080/api/email/sendEmail",email, {responseType: 'text'});
    }
    getEmails() {
        return this.httpClient.get("http://localhost:8080/api/email", {responseType: 'text'});
    }

}
