// JavaScript to handle product search functionality and display products dynamically

// Example product data
const products = [
    { name: "Bamboo Toothbrush", description: "Eco-friendly and biodegradable bamboo toothbrush.", price: "$5.99" },
    { name: "Reusable Water Bottle", description: "Stainless steel bottle to reduce plastic waste.", price: "$14.99" },
    { name: "Compostable Plates", description: "Made from sugarcane, biodegradable and compostable.", price: "$9.99" },
    { name: "Organic Cotton T-Shirt", description: "Soft and eco-friendly cotton t-shirt.", price: "$19.99" },
    { name: "Solar-Powered Charger", description: "Portable solar charger for your devices.", price: "$29.99" }
];

// Function to display products in the HTML
function displayProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Clear the existing products
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Display all products initially
displayProducts(products);

// Search functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );// JavaScript to handle product search functionality and display products dynamically

    // Example product data
    const products = [
        { name: "Bamboo Toothbrush", description: "Eco-friendly and biodegradable bamboo toothbrush.", price: "$5.99" },
        { name: "Reusable Water Bottle", description: "Stainless steel bottle to reduce plastic waste.", price: "$14.99" },
        { name: "Compostable Plates", description: "Made from sugarcane, biodegradable and compostable.", price: "$9.99" },
        { name: "Organic Cotton T-Shirt", description: "Soft and eco-friendly cotton t-shirt.", price: "$19.99" },
        { name: "Solar-Powered Charger", description: "Portable solar charger for your devices.", price: "$29.99" }
    ];
    
    // Function to display products in the HTML
    function displayProducts(products) {
        const productList = document.querySelector('.product-list');
        productList.innerHTML = ''; // Clear the existing products
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <button class="add-to-cart-btn">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }
    
    // Display all products initially
    displayProducts(products);
    
    // Search functionality
    document.getElementById('search-btn').addEventListener('click', function() {
        const searchQuery = document.getElementById('search-bar').value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery)
        );
        displayProducts(filteredProducts); // Display filtered products
    });
    
    // Optional: Allow pressing Enter key to trigger search
    document.getElementById('search-bar').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('search-btn').click();
        }
    });
    
    displayProducts(filteredProducts); // Display filtered products
});

// Optional: Allow pressing Enter key to trigger search
document.getElementById('search-bar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-btn').click();
    }
});
