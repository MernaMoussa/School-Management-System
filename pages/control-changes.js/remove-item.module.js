function handleRemoveItem(itemIdToRemove, retrieveData, keyData) {
    const existingItems = retrieveData() || [];
    const indexToRemove = existingItems.findIndex(item => item.id === itemIdToRemove);
    console.log(existingItems)
    console.log(indexToRemove)
    if (indexToRemove !== -1) {
        existingItems.splice(indexToRemove, 1);
        localStorage.setItem(keyData, JSON.stringify(existingItems));
        const cardElement = document.getElementById('card-' + itemIdToRemove);
        if (cardElement) {
            cardElement.remove();
        }
    }
}

export function setupRemoveButtons(retrieveData, keyData) {
    let removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let itemIdToRemove = button.id.replace('remove-', '');
            const numericItemtoRemove = Number(itemIdToRemove)
            handleRemoveItem(numericItemtoRemove, retrieveData, keyData);
        });
    });
}
