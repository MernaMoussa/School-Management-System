export function generateNavbar(page) {
  return `
      <li class="nav-item">
        <a id="nav-${page.pageName.toLowerCase()}" class="nav-link" href="#">${page.pageName}</a>
      </li>
    `;
}