import { generateNavbar } from './navbar.template.js'
export function generateNavItems(pages) {
    return pages.map(page => generateNavbar(page)).join('');
}