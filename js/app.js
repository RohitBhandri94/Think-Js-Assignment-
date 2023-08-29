cl= console.log;

const navbar = document.getElementById("navbar")
const toggleMenu = document.getElementById("toggleMenu");


const onToggleMenu = (eve) => {
    cl("Click Trigger")
    navbar.classList.toggle("visible")
}

toggleMenu.addEventListener('click', onToggleMenu);