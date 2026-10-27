// Search Product Functionality
let searchInput = document.getElementById('searchInput');

function searchProducts(event) {

    if (event.type === 'click' || event.key === 'Enter') {

        let searchText = searchInput.value.toLowerCase();

        let products = document.getElementsByClassName('product-card');

        for (let i = 0; i < products.length; i++) {

            
            // With [0] - It extracts the first <h2> element from the collection, and now we can access its textContent.

            // Without [0] - It returns a collection of <h2> elements, like [<h2></h2>].
            // The collection itself does not have a textContent property, so we cannot directly access the text content from it.
            let productName = products[i].getElementsByTagName('h2')[0].textContent.toLowerCase();

            if (productName.includes(searchText)) {
                products[i].style.display = 'block';
            }
            else {
                products[i].style.display = 'none';
            }
        }
    }
} 


// OPEN / CLOSE PROFILE DROPDOWN

let profileButton = document.getElementById("profileButton");
let profileDropdown = document.getElementById("profileDropdown");

profileButton.addEventListener("click", function(event) {

    if (profileDropdown.style.display == "block") {
        profileDropdown.style.display = "none";
    }
    else {
        profileDropdown.style.display = "block";
    }

});


// MY PROFILE

document.getElementById("myProfile").addEventListener("click", function(event) {
    alert("My Profile will be added later.");
});


// MY ORDERS

document.getElementById("myOrders").addEventListener("click", function(event) {
    alert("My Orders will be added later.");
});


// SIGN OUT

document.getElementById("signOutButton").addEventListener("click", function(event) {
    window.location.href = "login.html";
});



/* =========================
   ADD TO CART
========================= */

function addToCart() {

    let cartCount = document.getElementById("cartCount");

    let count = Number(cartCount.textContent);

    cartCount.textContent = count + 1;

}


/* =========================
   WISHLIST
========================= */

function toggleWishlist(event) {

    let heart = event.target;

    let wishlistCount = document.getElementById("wishlistCount");

    let count = Number(wishlistCount.textContent);

    if (heart.textContent.trim() == "♡") {

        heart.textContent = "♥";

        heart.style.color = "red";

        wishlistCount.textContent = count + 1;

    }
    else {

        heart.textContent = "♡";

        heart.style.color = "black";

        wishlistCount.textContent = count - 1;

    }

}
