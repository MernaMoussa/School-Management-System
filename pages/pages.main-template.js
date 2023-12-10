export function initializeMainTemplate(initializePagesFunction, pageHeader) {
    return `
        <div class="row justify-content-center">
            <h1>${pageHeader}</h1>
            <button type="button" class="btn btn-info">Add New ${pageHeader}</button>
            ${initializePagesFunction}
        </div>`
}