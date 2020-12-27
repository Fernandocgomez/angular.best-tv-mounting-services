import { ZipCodeCta } from './zip-code-cta.model';
import { NavBar } from './navbar.model';

export interface HeroSection {
    /**
     * Creates a HeroSection.
     * @param {string} heading - Hero section heading.
     * @param {string} subHeading - Hero section sub heading.
     * @param {boolean} isVideo - If true shows video hero section otherwise an image.
     * @param {string | undefined} video - Video URL or relative path - resolution 1280x720.
     * @param {string | undefined} picture - Picture URL or relative path - resolution 1920x1280.
    */

    heading: string;
    subHeading: string;
    isVideo: boolean;
    video?: string;
    picture?: string;
    navBar? : NavBar;
    zipCodeCta?: ZipCodeCta;
}