import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routinginangular');
  isDashboardRoute = false;
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

}


// This allows pages to load without reloading"
