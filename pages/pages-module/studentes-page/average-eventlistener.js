export function popup() {
    return document.getElementById('content-section').addEventListener('click', function (event) {
        const eventclass = event.target.id
        console.log(eventclass)
    })
}

