export interface ZipCodeCta {
    /**
     * Creates a ZipCodeCta.
     * @param {string} zipCodePlaceHolder - Input place holder.
     * @param {string} ctaBtnText - Text on button.
     * @param {string} inputDisclaimer - Text underneath the input.
     * @param {string} route - Rout to redirected when clicking on the button.
    */
    zipCodePlaceHolder: string;
    ctaBtnText: string;
    inputDisclaimer: string;
    route: string;
}