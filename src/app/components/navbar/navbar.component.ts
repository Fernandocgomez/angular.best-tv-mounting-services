// Angular modules
import { Component, Input, OnInit } from '@angular/core';
// Models
import { NavBar } from './../../models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Private properties

  // Public properties
  @Input() public navBarData?: NavBar;

  constructor() { }

  // Life cycle methods
  ngOnInit(): void {
  }

  // Private methods

  // Public methods

}
