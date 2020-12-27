// Angular module
import { Component, Input, OnInit } from '@angular/core';
// Models
import { HeroSection } from './../../models/hero-section.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  // Public properties
  @Input() public heroSectionData?: HeroSection;

  constructor() {}

  // Life cycle methods
  ngOnInit(): void {
  }

  // Private methods

  // Public methods
}
