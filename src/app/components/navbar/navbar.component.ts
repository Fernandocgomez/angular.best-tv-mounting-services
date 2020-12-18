import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Private properties

  // Public properties
  public logo: string = "../assets/static/logo.svg";
  public joinAsAPro: string = `Join as a pro &nbsp;&nbsp;<span><i class="fas fa-hard-hat"></i></span>`;

  constructor() { }

  // Life cycle methods
  ngOnInit(): void {
  }

  // Private methods

  // Public methods

}
