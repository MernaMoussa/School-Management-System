import { generateNavItems } from "./navigation-bar/navbar.module.js"
function headerTemplate(pages) {
  return `
        <nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
                <a class="navbar-brand" href="#">LMS</a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul class="navbar-nav" id="navbar-items">
                    ${generateNavItems(pages)}
                    </ul>
                </div>
                <div class="d-flex align-items-center">
                    <i class="bi bi-person-circle fs-3 text-white mr-3"></i>
                </div>
            </div>
        </nav>
      `;
}
export { headerTemplate }