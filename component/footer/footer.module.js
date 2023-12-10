import { footerTemplate } from './footer.template.js';
export function initializeFooter() {
    const footerSection = document.querySelector('.footer-section');
    const footerContent = footerTemplate();
    footerSection.innerHTML = footerContent;
}