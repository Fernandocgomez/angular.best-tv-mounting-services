export interface FeatureItemSection {
    /**
     * Creates a FeatureItemSection.
     * @param {string} heading - Hero section heading.
     * @param {string} subHeading - Hero section sub heading.
     * @param {string} icon - Text on CTA button.
     * @param {string} alt - Text under zip code input.
    */
    heading: string;
    subHeading: string;
    icon: string;
    alt?: string;
}