export function addNewElement() {
    console.log('Add New');
    const addButton = document.getElementById("new-element");
    addButton.addEventListener("click", (event) => {
        event.preventDefault();
    });
}