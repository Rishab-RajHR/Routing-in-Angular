import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting implements OnInit{
     userName: string = '';

     constructor(private route: ActivatedRoute){}

     ngOnInit(): void {
          this.userName = this.route.snapshot.paramMap.get('name')!;
     }
}
