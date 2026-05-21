let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDetails = document.getElementById("cart-details");
const cartSummary = document.getElementById("cart-summary");
const emptyCartButton = document.getElementById("empty-cart");



function showCart() {

    cartDetails.innerHTML = "";
    cartSummary.innerHTML = "";

        if (cart.length === 0) {
            cartDetails.innerHTML = "<p>Your cart is empty</p>";
            cartSummary.innerHTML = "";
            return;
    }

    cart.forEach(product => {

        let productPrice;

        if (product.discountedPrice < product.price) {
        
            productPrice =`
                <p class="old-price">${product.price}</p>
                <p class="discount-price">${product.discountedPrice}</p>
            `;

        } else {    

            productPrice =`
                <p>${product.price}</p>
            `;
        }

        const cartItem = document.createElement ("article");

        cartItem.innerHTML = `
            <a class="cart-item" href="../product/index.html?id=${product.id}">
                <img src="${product.image.url}" alt="${product.title}">
                <h2>${product.title}</h2>
            </a>

            <button class="cta cta-secondary remove-button">
                <i class="fa-regular fa-trash-can"></i>
            </button>

            <div class="item-price">
            ${productPrice}
            </div>
        `;

        const removeButton = cartItem.querySelector(".remove-button");

        removeButton.addEventListener("click", removeProduct);



        function removeProduct() {
       
            cart = cart.filter(cartProduct => cartProduct.id !== product.id);
            localStorage.setItem("cart", JSON.stringify(cart));

            showCart();
        }   


        cartDetails.appendChild(cartItem);

    });

        const total = cart.reduce((sum, product) => {

            const price = product.discountedPrice < product.price


                ? product.discountedPrice
                : product.price;

            return sum + parseFloat(price);
        
        }, 0);    

        const totalText = document.createElement("p");

        totalText.textContent = `Total: ${total.toFixed(2)}`;

        cartSummary.appendChild(totalText);

}


emptyCartButton.addEventListener("click", emptyCart);



function emptyCart() {

    cart = [];

    localStorage.removeItem("cart");

    showCart();

}

    showCart();










