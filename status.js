function highlightActivePage() {
    const page = window.location.pathname.split("/").pop() || "index.html"; // Default index.html
    const links = {
        "index.html": "home-link",
        "products.html": "products-link",
        "about.html": "about-link",
        "contact.html": "contact-link",
        "cart.html": "cart-link"
    };

    // Remove active class from all links first
    Object.values(links).forEach(id => {
        document.getElementById(id)?.classList.remove("active");
    });

    // Add active class to the current page link
    if (links[page]) {
        document.getElementById(links[page]).classList.add("active");
    }
}

window.onload = highlightActivePage;
