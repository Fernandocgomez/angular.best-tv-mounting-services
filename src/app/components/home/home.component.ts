// Angular module
import { Component, OnInit } from '@angular/core';
// Services
import { HomeService } from './../../services/home.service';
// Models
import { FeatureSection } from './../../models/feature-section.model';
import { HeroSection } from './../../models/hero-section.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Private properties

  // Public properties
  public heroSectionData?: HeroSection;
  public featureSectionData?: Array<FeatureSection>;

  constructor(private homeService: HomeService) { }

  // Life cycle methods
  ngOnInit(): void {
    this.heroSectionData = this.homeService.heroSectionData;
    this.featureSectionData = this.homeService.featureSectionData;
  }

  // Private methods

  // Public methods

}
