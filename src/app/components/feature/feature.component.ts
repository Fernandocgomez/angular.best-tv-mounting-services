// Angular module
import { Component, Input, OnInit } from '@angular/core';
// Model
import { FeatureSection } from './../../models/feature-section.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  // Private properties

  // Public properties
  public heading: string = "Features";
  @Input() public featureSectionData?: Array<FeatureSection>;
  constructor() { }

  // Life cycle methods
  ngOnInit(): void {
  }

  // Private methods

  // Public methods

}
