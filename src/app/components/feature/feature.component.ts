// Angular module
import { Component, Input, OnInit } from '@angular/core';
// Model
import { FeatureItemSection } from '../../models/feature-item-section.model';
import { FeatureSection } from './../../models/feature-section.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  // Private properties

  // Public properties
  @Input() public featureSectionData?: FeatureSection;
  @Input() public featureItemSectionData?: Array<FeatureItemSection>;
  
  constructor() { }

  // Life cycle methods
  ngOnInit(): void {
  }

  // Private methods

  // Public methods

}
