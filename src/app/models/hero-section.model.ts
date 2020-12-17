export class HeroSection {
    /**
     * Creates a HeroSection.
     * @param {string} heading - Hero section heading.
     * @param {string} subHeading - Hero section sub heading.
     * @param {string} ctaBtn - Text on CTA button.
     * @param {string | undefined} inputDisclaimer - Text under zip code input.
     * @param {boolean} isVideo - If true shows video hero section otherwise an image.
     * @param {string | undefined} video - Video URL or relative path - resolution 1280x720.
     * @param {string | undefined} picture - Picture URL or relative path - resolution 1920x1280.
     * @param {string} zipCodePlaceHolder - Place holder for the zip code input.
    */
    constructor(
        public heading: string,
        public subHeading: string,
        public ctaBtn: string,
        public inputDisclaimer: string | undefined,
        public isVideo: boolean,
        public video: string | undefined,
        public picture: string | undefined, 
        public zipCodePlaceHolder: string,
    ) { }
}