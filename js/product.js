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
                <p class="old-price price">${product.price}</p>
                <p class="discount-price price">${product.discountedPrice}</p>
            `;

        } else {    

            productPrice =`
                <p class="price">${product.price}</p>
            `;
}

productDetails.innerHTML = `
    <section class="product-image">
        <img src="${product.image.url}" alt="${product.title}">
    </section>
    
    <section class="product-info">
        <h1>${product.title}</h1>
        <div class="tags">Category: ${product.tags.join(", ")}</div>
        <div class="rating">
            ${'<i class="fa-solid fa-star"></i>'.repeat(product.rating)}${'<i class="fa-regular fa-star"></i>'.repeat(5 - product.rating)}
            (${product.rating}/5)
        </div>
        <div>${productPrice}</div>
        <p class="description">${product.description}</p>    
        <div class="product-cta">
            <button class=" cta cta-primary cta-cart">Add to cart</button>
            <button class=" cta cta-secondary cta-share">Share</button>
        </div>
    </section>

    <section class="reviews">
        <h2>Reviews</h2>
        ${reviews}
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




