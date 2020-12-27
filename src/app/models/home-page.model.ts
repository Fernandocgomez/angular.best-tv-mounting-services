import { CompanyServiceItemSection } from './company-service-item-section.model';
import { CompanyServiceSection } from './company-service-section.model';
import { FeatureItemSection } from './feature-item-section.model';
import { FeatureSection } from './feature-section.model';
import { HeroSection } from './hero-section.model';
import { ParallaxScrollingSection } from './parallax-scrolling-section.model';

export interface HomePage {
    heroSection: HeroSection;
        // Navbar
        // zip code cta
    featureSection: FeatureSection;
    featureItemSection: Array<FeatureItemSection>;
    parallaxScrollingSection: ParallaxScrollingSection;
    companyServiceSection: CompanyServiceSection;
    companyServiceItemSection: Array<CompanyServiceItemSection>
}