import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cookies } from "./cookies/cookies";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, Cookies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routinginangular');
  isDashboardRoute = false;

  userName: string = '';

  constructor(private router: Router){
      this.router.events.subscribe((event) => {
          if(event instanceof NavigationEnd){
              this.isDashboardRoute = event.url.startsWith('/dashboard');
          }
      })
  }

  goToDashboard(){
      this.router.navigate(['/dashboard'])
  }

  navigateToGreeting() {
      if(this.userName.trim()){
          this.router.navigate(['/greeting', this.userName]);
      } else {
        alert('Please Enter Your Name to navigate greetings page');
      }
  }

  isPageNotFound(): boolean{
      return this.router.url === '/page-not-found';
  }

}


// This allows pages to load without reloading"
