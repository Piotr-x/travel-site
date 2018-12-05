class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.headerTriggerElement = document.querySelector('.large-hero__title');
        this.pageSections = document.querySelectorAll('.page-section');
        this.windowHeight = window.innerHeight;
        this.events();
    }

    reveal() {
        let titleBottom = this.headerTriggerElement.getBoundingClientRect().bottom;
        if (titleBottom < 0) {
            this.siteHeader.classList.add('site-header--dark');
        } else {
            this.siteHeader.classList.remove('site-header--dark');
        }

        this.pageSections.forEach(e => {
            let sectionId = e.getAttribute('data-matching-link');
            let headerLink = document.querySelector(sectionId);
            let sectionHeader = e.getBoundingClientRect().top;
            let sectionBottom = e.getBoundingClientRect().bottom;
            if (sectionHeader < (this.windowHeight * 0.3) && sectionBottom > (this.windowHeight * 0.3)) {
                headerLink.className = 'primary-nav--is-active';
            } else {
                headerLink.classList.remove('primary-nav--is-active');
            }
        });
    }
    
    events() {
        window.addEventListener('scroll', this.reveal.bind(this));
    }
}

export default StickyHeader;