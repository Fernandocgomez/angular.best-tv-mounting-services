export class CompanyServiceItemSection {
    /**
     * Creates a CompanyServiceItemSection.
     * @param {string} image - image src.
     * @param {string} cardTitle - card title.
     * @param {string} cardText - card body text.
     * @param {string} cardLinkText - call to action link text.
     * @param {string} cardLinkHref - call to action link route.
    */
    constructor(
        public image: string,
        public cardTitle: string,
        public cardText: string,
        public cardLinkText: string,
        public cardLinkHref: string,
    ) { }
}