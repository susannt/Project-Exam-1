const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

getProduct(id).then(product => {
         console.log(product);


});

const productDetails = document.getElementById("product-details");

getProduct(id).then(product => {

    
productDetails.innerHTML = `
    <section class="product-image">
        <img src="${product.image.url}" alt="${product.title}">
        <p>Rating: ${product.rating}</p>
        <p>reviews placeholder</p>
    </section>
    
    <section class="product-details">    
        <h1>${product.title}</h1>
        <p>Tags: ${product.tags.join(", ")}</p>
        <p>${product.price}</p>
        <p>${product.description}</p>
        <div class="product-cta">
            <button class=" cta cta-primary">Add to cart</button>
            <button class=" cta cta-secondary">Share</button>
        </div>
    </section>
`;

});


