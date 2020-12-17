export class FeatureSection {
    /**
     * Creates a FeatureSection.
     * @param {string} heading - Hero section heading.
     * @param {string} subHeading - Hero section sub heading.
     * @param {string} icon - Text on CTA button.
     * @param {string} alt - Text under zip code input.
    */
    constructor(
        public heading: string,
        public subHeading: string,
        public icon: string,
        public alt: string | undefined,
    ) { }
}