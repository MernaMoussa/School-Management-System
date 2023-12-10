import { renderModalWindow } from "./modal-window/modal-window.template.js"
export function initializeMainTemplate(initializePagesFunction, pageHeader) {
    return `
        <div class="row justify-content-center">
            <h1>${pageHeader}</h1>
            <div class="col-12" id="eventlistener">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-info col-2 mb-4" data-bs-toggle="modal" data-bs-target="#add-btn" id="new-element">
                        Add New ${pageHeader}
                    </button>
                    ${renderModalWindow()}
                </div>
            </div>
            ${initializePagesFunction}
        </div>
        `
}