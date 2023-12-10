export function initializeMainTemplate(initializePagesFunction, pageHeader) {
    return `
        <div class="row justify-content-center">
            <h1>${pageHeader}</h1>
            ${initializePagesFunction}
        </div>`
}