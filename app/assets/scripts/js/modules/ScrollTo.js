class ScrollTo {
    constructor() {
        this.headerLinks = document.querySelectorAll('.site-header a:not(.btn)');
        this.events();
    }

    scroll(sectionId) {
        console.log(sectionId.getBoundingClientRect().top + window.scrollY);
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: sectionId.getBoundingClientRect().top + window.scrollY
        });
    }

    events() {
        this.headerLinks.forEach(e => {
            let linkId = e.getAttribute('id');
            let sectionId = document.querySelector(`[data-matching-link="#${linkId}"]`);
            e.addEventListener('click', event => {
				event.preventDefault();
				this.scroll(sectionId);
            }, false);
        });
    }
}

export default ScrollTo;