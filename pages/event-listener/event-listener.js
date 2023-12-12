export function addNewElement() {
    const addButton = document.getElementById("new-element");
    if (addButton) {
        addButton.addEventListener("click", (event) => {
            event.preventDefault();
            console.log('clicked');
        });
    }
}