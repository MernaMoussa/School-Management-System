import { footerTemplate } from './footer.template.js';
export function initializeFooter() {
    const footerSection = document.getElementById('footer-section');
    const footerContent = footerTemplate();
    footerSection.innerHTML = footerContent;
}