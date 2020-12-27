export interface CompanyServiceItemSection {
    /**
     * Creates a CompanyServiceItemSection.
     * @param {string} image - image src.
     * @param {string} cardTitle - card title.
     * @param {string} cardText - card body text.
     * @param {string} cardLinkText - call to action link text.
     * @param {string} cardLinkHref - call to action link route.
    */
    image: string;
    cardTitle: string;
    cardText: string;
    cardLinkText: string;
    cardLinkHref: string;
}