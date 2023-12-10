import { generateNavbar } from './navbar.template.js'
export function generateNavItems(data) {
    return data.map(page => generateNavbar(page)).join('');
}