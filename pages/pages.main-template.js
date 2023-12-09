import { initializeClasses } from "./pages.module/classes.module.JS"
export function initializeMainTemplate() {
    return `
        <div class="row justify-content-center">
            <h1>  </h1>
            ${initializeClasses()}
        </div>`
}