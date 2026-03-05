import { authGuard } from './../auth-guard';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    constructor(private router: Router, private authGuard: authGuard){}

    login(){
        this.authGuard.toggleLogin();
        this.router.navigate(['/personal']);
    }
}
