let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDetails = document.getElementById("cart");
const emptyCartButton = document.getElementById("empty-cart");



function showCart() {

    cartDetails.innerHTML = "";

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
            <a href="../product/index.html?id=${product.id}">
                <img src="${product.image.url}" alt="${product.title}">
                <h2>${product.title}</h2>
            </a>

            ${productPrice}

            <button class="cta cta-secondary remove-button">
                <i class="fa-regular fa-trash-can"></i>
            </button>
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
}


emptyCartButton.addEventListener("click", emptyCart);



function emptyCart() {

    cart = [];

    localStorage.removeItem("cart");

    showCart();

}

    showCart();










