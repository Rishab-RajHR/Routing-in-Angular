import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routinginangular');
  isDashboardRoute = false;
  constructor(private router: Router){}

  goToDashboard(){
      this.router.navigate(['/dashboard'])
  }

}


// This allows pages to load without reloading"
