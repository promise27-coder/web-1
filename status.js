// Function to highlight the active page in navigation
function highlightActivePage() {
    const page = window.location.pathname.split("/").pop(); // Get the current page filename
    const links = {
        "index.html": "home-link",
        "products.html": "products-link",
        "about.html": "about-link",
        "contact.html": "contact-link"
    };

    if (links[page]) {
        document.getElementById(links[page]).classList.add("active");
    }
}

// Call the function when the page loads
window.onload = highlightActivePage;
