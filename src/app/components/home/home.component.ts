import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    //console.log('home: ' + this.router.isActive) ;
  }

  ngOnInit() {
    this.router.isActive;
  }s

}
