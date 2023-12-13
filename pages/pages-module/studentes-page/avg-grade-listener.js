export function setupAvgButtons(retrieveData, keyData) {
    let avgButtons = document.querySelectorAll('.avg-grade');
    avgButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let itemIdToRemove = button.id.replace('remove-', '');
            const numericItemtoRemove = Number(itemIdToRemove)
            handleRemoveItem(numericItemtoRemove, retrieveData, keyData);
        });
    });
}


