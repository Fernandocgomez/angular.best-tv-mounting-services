export class HeroSection {
    /**
     * Creates a HeroSection.
     * @param {string} heading - Hero section heading.
     * @param {string} subHeading - Hero section sub heading.
     * @param {boolean} isVideo - If true shows video hero section otherwise an image.
     * @param {string | undefined} video - Video URL or relative path - resolution 1280x720.
     * @param {string | undefined} picture - Picture URL or relative path - resolution 1920x1280.
    */
    constructor(
        public heading: string,
        public subHeading: string,
        public isVideo: boolean,
        public video: string | undefined,
        public picture: string | undefined,
    ) { }
}