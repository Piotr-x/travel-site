class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = document.querySelectorAll(els);
        this.revealerPoint = offset;
        this.hideInitially();
        this.events();
    }
    
    hideInitially() {
        this.itemsToReveal.forEach(e => e.classList.add('reveal-item'));
    }

    reveal() {
        const windowHeight = window.innerHeight;
        this.itemsToReveal.forEach(e => {
            let revealerTop = e.getBoundingClientRect().top;
            if (revealerTop < (windowHeight * this.revealerPoint)) {
                e.classList.add('reveal-item--is-visible');
            }
        });
    }

    events() {
        window.addEventListener('scroll', this.reveal.bind(this));
    }

}

export default RevealOnScroll;