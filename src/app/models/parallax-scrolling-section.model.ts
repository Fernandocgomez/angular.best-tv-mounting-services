export class ParallaxScrollingSection {
    /**
     * Creates a ParallaxScrollingSection.
     * @param {string} heading - Hero section heading.
     * @param {string} subHeading - Hero section sub heading.
     * @param {string} bgImage - Background image.
    */
    constructor(
        public heading: string,
        public subHeading: string,
        public style: object
    ) { }
}