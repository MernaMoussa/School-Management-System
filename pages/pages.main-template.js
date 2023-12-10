export function initializeMainTemplate(initializePagesFunction) {
    return `
        <div class="row justify-content-center">
            <h1>  </h1>
            ${initializePagesFunction}
        </div>`
}