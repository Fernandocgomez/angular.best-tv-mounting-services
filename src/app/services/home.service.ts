// Angular modules
import { Injectable } from '@angular/core';
// Models
import { FeatureSection } from './../models/feature-section.model';
import { CompanyServiceItemSection } from './../models/company-service-item-section.model';
import { CompanyServiceSection } from './../models/company-service-section.model';
import { HeroSection } from './../models/hero-section.model';
import { FeatureItemSection } from '../models/feature-item-section.model';
import { ParallaxScrollingSection } from './../models/parallax-scrolling-section.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private heroSection: HeroSection = new HeroSection(
    'Hire a top-rated tv mounting specialist',
    'Find the best deals and compare for free!',
    true,
    "../../../assets/static/home/hero-section/video.mp4",
    undefined
  );

  private featureSection: FeatureSection = new FeatureSection("Lorem Ipsum");
  
  private featureItemSection: Array<FeatureItemSection> = [
    new FeatureItemSection(
      "Find Top Contractors",
      "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      "../../../assets/static/home/feature-section/find-top-contractors.svg",
      "Feature icon"
    ),
    new FeatureItemSection(
      "Compare Prices",
      "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      "../../../assets/static/home/feature-section/compare-prices.svg",
      "Feature icon"
    ),
    new FeatureItemSection(
      "100% Free Quote",
      "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      "../../../assets/static/home/feature-section/100-free-quote.svg",
      "Feature icon"
    ),
    new FeatureItemSection(
      "Quality",
      "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      "../../../assets/static/home/feature-section/quality.svg",
      "Feature icon"
    ),
    new FeatureItemSection(
      "Pay Less",
      "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      "../../../assets/static/home/feature-section/pay-less.svg",
      "Feature icon"
    ),
    new FeatureItemSection(
      "Feedback",
      "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      "../../../assets/static/home/feature-section/feedback.svg",
      "Feature icon"
    )
  ];

  private parallaxScrollingSection: ParallaxScrollingSection = new ParallaxScrollingSection(
    "Sit back and relax while we do all the work", 
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi, consequuntur ex", 
    {
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../../../assets/static/home/parallax-section/bg.jpg')`,
      backgroundPosition: "center",
    }
  )

  private companyServiceSection: CompanyServiceSection = new CompanyServiceSection("Other Services");

  private companyServiceItemSection: Array<CompanyServiceItemSection> = [
    new CompanyServiceItemSection(
      "../../../assets/static/home/company-service-section/home-theater.jpg",
      "Home Theater",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque. Eligendi et suscipit similique sunt fugit debitis nostrum maxime tenetur. Vero minima laborum cupiditate aspernatur illo esse repellat qui odio.",
      "Learn More",
      "#"
    ),
    new CompanyServiceItemSection(
      "../../../assets/static/home/company-service-section/tv-dismount.jpg",
      "TV Dismount Or Remount",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque. Eligendi et suscipit similique sunt fugit debitis nostrum maxime tenetur. Vero minima laborum cupiditate aspernatur illo esse repellat qui odio.",
      "Learn More",
      "#"
    ),
    new CompanyServiceItemSection(
      "../../../assets/static/home/company-service-section/projector-installation.jpg",
      "Projector Installation",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque. Eligendi et suscipit similique sunt fugit debitis nostrum maxime tenetur. Vero minima laborum cupiditate aspernatur illo esse repellat qui odio.",
      "Learn More",
      "#"
    )
  ];

  constructor() { }

  get heroSectionData() {
    return this.heroSection;
  }

  get featureSectionData() {
    return this.featureSection;
  }

  get featureItemSectionData() {
    return this.featureItemSection;
  }

  get parallaxScrollingData() {
    return this.parallaxScrollingSection;
  }

  get companyServiceSectionData() {
    return this.companyServiceSection;
  }

  get companyServiceItemSectionData() {
    return this.companyServiceItemSection;
  }
}
