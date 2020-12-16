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
  public heading: string = 'Hire a top-rated tv mounting specialist';
  public subHeading: string = 'Find the best deals and compare for free!';
  public btnText: string = 'Get Started';
  public inputDisclaimer: string = 'Top Best Texas Tv Mounting Contractors';
  public video: string = "../../../assets/video.mp4";
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
