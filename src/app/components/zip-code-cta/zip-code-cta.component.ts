import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zip-code-cta',
  templateUrl: './zip-code-cta.component.html',
  styleUrls: ['./zip-code-cta.component.scss']
})
export class ZipCodeCtaComponent implements OnInit {
  // Private properties
  private zipCodeRegExp: RegExp = /^\d{5}(?:[-\s]\d{4})?$/;
  
  // Public properties
  public zipCodeCtaData = {
    zipCodePlaceHolder: "Zip Code",
    ctaBtn: "Get Started", 
    inputDisclaimer: "Top Best Tv Mounting Contractors",
    route: "/lead/tv-mounting/get-started"
  }
  
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
