export function generateNavbar(page) {
  return `
      <li class="nav-item">
        <a id="nav-${page.pageName.toLowerCase()}" class="nav-link" href="#">${page.pageName}</a>
      </li>
    `;
}

export function generateNavItems(data) {
  return data.map(page => generateNavbar(page)).join('');
}