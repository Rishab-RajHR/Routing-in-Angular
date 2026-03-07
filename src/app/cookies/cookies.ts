import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  imports: [],
  templateUrl: './cookies.html',
  styleUrl: './cookies.css',
})
export class Cookies {
    cookieValue : string = '';

    constructor(private cookieService: CookieService) {}

    setCookie(){
        this.cookieService.set('username', 'AngularUser', 1);
        alert('Cookie set successfully!');
    }

    getCookie(){
        this.cookieValue = this.cookieService.get('username');
        alert('Cookie Value: ' + this.cookieValue);
    }

    deleteCookie(){
        this.cookieService.delete('username');
        this.cookieValue = '';
        alert('Cookie Deleted Successfully');
    }
}
