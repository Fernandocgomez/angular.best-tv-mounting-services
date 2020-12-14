// Angular module
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  // Private properties
  private zipCodeRegExp: RegExp = /^\d{5}(?:[-\s]\d{4})?$/;
  private ZipCodeRequired: boolean = true;

  // Public properties
  public heading: string = 'TV MOUNTING INSTALLATION';
  public subHeading: string = 'Compare prices & installation costs. Find best deals and compare for free right now!';
  public btnText: string = 'Get Started';
  public inputDisclaimer: string = 'Top Texas Tv Mounting Contractors';
  public video: string = "../../../assets/hero-video.mp4";
  public zipCodePlaceHolder: string= "Zip Code";
  // Reactive forms
  public form = new FormGroup({
    zipCode: new FormControl('', [
      this.ZipCodeRequired ? Validators.required : Validators.nullValidator,
      Validators.pattern(this.zipCodeRegExp),
    ]),
  });

  constructor() {}

  // Life cycle methods
  ngOnInit(): void {
    console.log();
  }

  // Private methods

  // Public methods
}
