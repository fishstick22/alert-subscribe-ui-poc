import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  // selector: 'app-home', selector not needed on routed components
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    // console.log('home: ' + this.router.isActive) ;
  }

  ngOnInit() {
  }

}
