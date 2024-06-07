// JavaScript code for scroll snapping with scroll up and scroll down navigation

const sections = document.querySelectorAll('section');
let currentSectionIndex = localStorage.getItem('currentSectionIndex');

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
    
}

window.addEventListener('wheel', (event) => {
    // if (window.innerWidth > 700) {
        if (event.deltaY > 0) {
            // Scrolling down
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
            scrollToSection(currentSectionIndex);
        } else if (event.deltaY < 0) {
            // Scrolling up
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
            scrollToSection(currentSectionIndex);
        }
        localStorage.setItem('currentSectionIndex', currentSectionIndex);
    // }
});