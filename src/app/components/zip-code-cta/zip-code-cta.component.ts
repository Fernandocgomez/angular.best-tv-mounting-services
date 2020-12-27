// Angular module
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Model
import { ZipCodeCta } from './../../models/zip-code-cta.model';

@Component({
  selector: 'app-zip-code-cta',
  templateUrl: './zip-code-cta.component.html',
  styleUrls: ['./zip-code-cta.component.scss']
})
export class ZipCodeCtaComponent implements OnInit {
  // Private properties
  private zipCodeRegExp: RegExp = /^\d{5}(?:[-\s]\d{4})?$/;
  
  // Public properties
  @Input() public zipCodeCtaData?: ZipCodeCta;
  
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
