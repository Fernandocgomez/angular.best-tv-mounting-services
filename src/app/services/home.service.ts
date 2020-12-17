import { FeatureSection } from './../models/feature-section.model';
import { HeroSection } from './../models/hero-section.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public heroSection: HeroSection = new HeroSection(
    'Hire a top-rated tv mounting specialist',
    'Find the best deals and compare for free!',
    'Get Started',
    'Top Best Texas Tv Mounting Contractors',
    true,
    "../../../assets/home/hero-section/video.mp4",
    undefined,
    "Zip Code"
  );

  public featureSection: Array<FeatureSection> = [
    new FeatureSection(
      "Find Top Contractors",
      "Flat Screen LCD, LED, 3D, 4k UHD TV wall mounting of any size, by trained professionals, in a timely manner.",
      "../../../assets/home/feature-section/find-top-contractors.svg",
      "Feature icon"
    ),
    new FeatureSection(
      "Compare Prices",
      "Flat Screen LCD, LED, 3D, 4k UHD TV wall mounting of any size, by trained professionals, in a timely manner.",
      "../../../assets/home/feature-section/compare-prices.svg",
      "Feature icon"
    ),
    new FeatureSection(
      "100% Free Quote",
      "Flat Screen LCD, LED, 3D, 4k UHD TV wall mounting of any size, by trained professionals, in a timely manner.",
      "../../../assets/home/feature-section/100-free-quote.svg",
      "Feature icon"
    ),
    new FeatureSection(
      "Quality",
      "Flat Screen LCD, LED, 3D, 4k UHD TV wall mounting of any size, by trained professionals, in a timely manner.",
      "../../../assets/home/feature-section/quality.svg",
      "Feature icon"
    ),
    new FeatureSection(
      "Pay Less",
      "Flat Screen LCD, LED, 3D, 4k UHD TV wall mounting of any size, by trained professionals, in a timely manner.",
      "../../../assets/home/feature-section/pay-less.svg",
      "Feature icon"
    ),
    new FeatureSection(
      "Feedback",
      "Flat Screen LCD, LED, 3D, 4k UHD TV wall mounting of any size, by trained professionals, in a timely manner.",
      "../../../assets/home/feature-section/feedback.svg",
      "Feature icon"
    )
  ];

  constructor() {}

  get heroSectionData() {
    return this.heroSection;
  }

  get featureSectionData() {
    return this.featureSection;
  }
}
