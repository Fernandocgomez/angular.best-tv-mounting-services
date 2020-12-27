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

  private heroSection: HeroSection = {
    heading: 'Hire a top-rated tv mounting specialist',
    subHeading: 'Find the best deals and compare for free!',
    isVideo: true,
    video: "../../../assets/static/home/hero-section/video.mp4",
    navBar: {
      logo: "../assets/static/logo.svg",
      navLink: "/join-as-a-pro",
      navLinkText: 'Join as a pro &nbsp;&nbsp;<span><i class="fas fa-hard-hat"></i></span>'
    },
    zipCodeCta: {
      zipCodePlaceHolder: "Zip Code",
      ctaBtnText: "Get Started", 
      inputDisclaimer: "Top Best Tv Mounting Contractors",
      route: "/lead/tv-mounting/get-started"
    }
  }

  private featureSection: FeatureSection = { heading: "Lorem Ipsum"}

  private featureItemSection: Array<FeatureItemSection> = [
    {
      heading: "Find Top Contractors",
      subHeading: "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      icon: "../../../assets/static/home/feature-section/find-top-contractors.svg",
      alt: "Feature icon"
    },
    {
      heading: "Compare Prices",
      subHeading: "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      icon: "../../../assets/static/home/feature-section/compare-prices.svg",
      alt: "Feature icon"
    },
    {
      heading: "100% Free Quote",
      subHeading: "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      icon: "../../../assets/static/home/feature-section/100-free-quote.svg",
      alt: "Feature icon"
    },
    {
      heading: "Quality",
      subHeading: "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      icon: "../../../assets/static/home/feature-section/quality.svg",
      alt: "Feature icon"
    },
    {
      heading: "Pay Less",
      subHeading: "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      icon: "../../../assets/static/home/feature-section/pay-less.svg",
      alt: "Feature icon"
    },
    {
      heading: "Feedback",
      subHeading: "asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi",
      icon: "../../../assets/static/home/feature-section/feedback.svg",
      alt: "Feature icon"
    }
  ];

  private parallaxScrollingSection: ParallaxScrollingSection = {
    heading: "Sit back and relax while we do all the work", 
    subHeading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, asperiores iste veritatis sint facere numquam aspernatur aliquid voluptate ducimus fuga, voluptatem minus iusto sunt quae doloribus deserunt excepturi, consequuntur ex", 
    style: {
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../../../assets/static/home/parallax-section/bg.jpg')`,
      backgroundPosition: "center",
    }
  }

  private companyServiceSection: CompanyServiceSection = {heading: "Other Services"};

  private companyServiceItemSection: Array<CompanyServiceItemSection> = [
    {
      image: "../../../assets/static/home/company-service-section/home-theater.jpg",
      cardTitle: "Home Theater",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque. Eligendi et suscipit similique sunt fugit debitis nostrum maxime tenetur. Vero minima laborum cupiditate aspernatur illo esse repellat qui odio.",
      cardLinkText: "Learn More",
      cardLinkHref: "#"
    },
    {
      image: "../../../assets/static/home/company-service-section/tv-dismount.jpg",
      cardTitle: "TV Dismount Or Remount",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque. Eligendi et suscipit similique sunt fugit debitis nostrum maxime tenetur. Vero minima laborum cupiditate aspernatur illo esse repellat qui odio.",
      cardLinkText: "Learn More",
      cardLinkHref: "#"
    },
    {
      image: "../../../assets/static/home/company-service-section/projector-installation.jpg",
      cardTitle: "Projector Installation",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque. Eligendi et suscipit similique sunt fugit debitis nostrum maxime tenetur. Vero minima laborum cupiditate aspernatur illo esse repellat qui odio.",
      cardLinkText: "Learn More",
      cardLinkHref: "#"
    }
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
