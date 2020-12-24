// Angular module
import { Component, OnInit } from '@angular/core';
// Services
import { HomeService } from './../../services/home.service';
// Models
import { ParallaxScrollingSection } from './../../models/parallax-scrolling-section.model';
import { FeatureItemSection } from '../../models/feature-item-section.model';
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
  public featureItemSectionData?: Array<FeatureItemSection>;
  public featureSectionData?: FeatureSection;
  public parallaxScrollingData?: ParallaxScrollingSection;

  constructor(private homeService: HomeService) { }

  // Life cycle methods
  ngOnInit(): void {
    this.heroSectionData = this.homeService.heroSectionData;
    this.featureSectionData = this.homeService.featureSectionData;
    this.featureItemSectionData = this.homeService.featureItemSectionData;
    this.parallaxScrollingData = this.homeService.parallaxScrollingData;
  }

  // Private methods

  // Public methods

}
