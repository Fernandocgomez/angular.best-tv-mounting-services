// Angular module
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Models
import { HeroSection } from './../../models/hero-section.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  // Private properties
  private zipCodeRegExp: RegExp = /^\d{5}(?:[-\s]\d{4})?$/;
  
  // Public properties
  @Input() public heroSectionData?: HeroSection;
  
  // Reactive forms
  public form = new FormGroup({
    zipCode: new FormControl('', [
      Validators.required,
      Validators.pattern(this.zipCodeRegExp),
    ]),
  });

  constructor() {}

  // Life cycle methods
  ngOnInit(): void {
  }

  // Private methods

  // Public methods
}
