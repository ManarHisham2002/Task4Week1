// Show Icon ScrollUp
window.onscroll = function () { toggleBackToTopArrow(); };

function toggleBackToTopArrow() {
    const arrow = document.getElementById("backToTop");
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
}

// Function To Page Top Page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Function Dark Mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}