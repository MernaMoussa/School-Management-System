import { generateNavItems } from "./navigation-bar/navbar-template.js"
function headerTemplate(pages) {
    return `
          <nav id="navbar" class="navbar navbar-expand-md bg-dark navbar-dark p-4">
              <a class="navbar-brand" href="#">LMS</a>
              <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavbar"
              >
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul class="navbar-nav">
                  ${generateNavItems(pages)}
                  </ul>
              </div>
          </nav>
      `;
}
export default headerTemplate