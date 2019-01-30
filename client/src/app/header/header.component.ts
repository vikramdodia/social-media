import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _router: Router ) { }

  ngOnInit() {
  }

  logout(){
  	localStorage.clearAll();
  	this._router.navigate(['/log-in'])
  }
}
