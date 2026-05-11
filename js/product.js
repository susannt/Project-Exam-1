const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productDetails = document.getElementById("product-details");

getProduct(id).then(product => {

        let reviews = "";

        product.reviews.forEach(review => {
            reviews +=`
            <div class="review">
            <h3>${review.username}</h3>
            <p>${review.description}</p>
            </div>
        `;
        });

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

productDetails.innerHTML = `
    <section class="product-image">
        <img src="${product.image.url}" alt="${product.title}">
        <p>Rating: ${product.rating}</p>
        <div class="reviews">
            ${reviews}
        </div>
    </section>
    
    <section class="product-details">    
        <h1>${product.title}</h1>
        <p>Tags: ${product.tags.join(", ")}</p>
        ${productPrice}
        <p>${product.description}</p>
        <div class="product-cta">
            <button class=" cta cta-primary cta-cart">Add to cart</button>
            <button class=" cta cta-secondary">Share</button>
        </div>
    </section>
`;

const addToCartButton = document.querySelector(".cta-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

addToCartButton.addEventListener("click", addToCart);

function addToCart() {

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart);
}

});




