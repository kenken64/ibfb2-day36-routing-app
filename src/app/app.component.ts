import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day36-routing-app';

  constructor(private router: Router){}

  gotoTrex(){
    const x = 1+1;
    console.log(x);
    this.router.navigate(['/trex']);
  }
}
