import { ZipCodeCta } from './zip-code-cta.model';
export interface ParallaxScrollingWithCtaSection {
    /**
     * Creates a ParallaxScrollingWithCtaSection.
     * @param {string} zipCodePlaceHolder - Input place holder.
     * @param {string} ctaBtnText - Text on button.
     * @param {string} inputDisclaimer - Text underneath the input.
     * @param {string} route - Rout to redirected when clicking on the button.
    */
    heading: string;
    subHeading: string;
    style: object;
    zipCodeCta: ZipCodeCta;
}