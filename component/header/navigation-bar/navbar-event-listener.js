function handleNavbarClick(event) {
    if (event.target.id === 'nav-home') {
        console.log('home')
    }
}
let navbarListenet = document.getElementById('main-container').addEventListener('click', handleNavbarClick);
export { navbarListenet }