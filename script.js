// JavaScript for Flipkart Clone

// Search functionality
document.querySelector('.btn[type="button"]').addEventListener('click', function() {
    const query = document.querySelector('input[type="text"]').value;
    alert(`Searching for: ${query}`);
});

// Add to cart functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        alert('Added to cart!');
    });
});

// Navigation links (placeholder)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Navigating to ${this.textContent}`);
    });
});

// Login button
document.querySelector('button.btn-outline-light').addEventListener('click', function() {
    alert('Login functionality not implemented yet.');
});

// More button
document.querySelectorAll('button.btn-outline-light')[1].addEventListener('click', function() {
    alert('More options not implemented yet.');
});

// Cart button
document.querySelectorAll('button.btn-outline-light')[2].addEventListener('click', function() {
    alert('Cart functionality not implemented yet.');
});
