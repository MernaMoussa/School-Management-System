export function displayErrorMessage(message) {
    const errorMessageContainer = document.getElementById('errorMessage');
    if (errorMessageContainer) {
        errorMessageContainer.innerText = message;
        errorMessageContainer.style.display = 'block';
    }
}

export function clearErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.innerText = '';
        errorMessage.style.display = 'none';
    }
}