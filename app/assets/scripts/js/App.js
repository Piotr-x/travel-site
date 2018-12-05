import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ScrollTo from './modules/ScrollTo';
import Modal from './modules/Modal';

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
const scrollTo = new ScrollTo();
new RevealOnScroll(".feature-item", 0.85);
new RevealOnScroll(".testimonial", 0.85);
const modal = new Modal();