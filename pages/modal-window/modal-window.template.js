export function renderModalWindow(modalTemplate, modalTitle) {
    return `
    <div class="modal fade" id="add-btn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${modalTitle}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                ${modalTemplate}
                </div>
                <div id="successMessage" class="alert alert-success" role="alert" style="display: none;">
                    Student added successfully!
                </div>
                <div id="errorMessage" class="alert alert-success" role="alert" style="display: none;">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="submit">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    `
}