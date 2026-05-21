// Carousel

const carouselImages = document.getElementById("carousel-images");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

let carouselProducts = [];
let currentIndex = 0;

carouselImages.innerHTML = "<p>Loading products...</p>";

getProducts().then(products => {
    
    carouselProducts = products.slice(13,16);

    showProduct(currentIndex);


}).catch(error => {

    carouselImages.innerHTML = `
        <p>Failed to load products.</p>
    `;
});

function showProduct(index) {

    const product = carouselProducts[index];
    
        carouselImages.innerHTML =`
            <a href="product/index.html?id=${product.id}">
                <img src="${product.image.url}" alt="${product.title}">
            </a>

            <a href="product/index.html?id=${product.id}"class="cta cta-secondary cta-view">
                View
            </a>
        `;
}

nextButton.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= carouselProducts.length) {
        currentIndex = 0;
    }

    showProduct(currentIndex);
});

previousButton.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = carouselProducts.length - 1;
    }

    showProduct(currentIndex);
});



// Product List

const productList = document.getElementById("product-list");

productList.innerHTML = "<p>Loading products...</p>"

getProducts().then(products => {

    productList.innerHTML = "";

    const productCards = products.slice(0,12);

    productCards.forEach(product => {

        let productPrice;

        if (product.discountedPrice < product.price) {
        
            productPrice =`
                <p class="old-price">${product.price}</p>
                <p class="discount-price">${product.discountedPrice}</p>
            `;

        } else {    

            productPrice =`
                <p class="price">${product.price}</p>
            `;
}

    productList.innerHTML += `
        <article class="product-card">
            <a href="product/index.html?id=${product.id}">
                <img src="${product.image.url}" alt="${product.title}">
                <h3>${product.title}</h3>
                ${productPrice}
            </a>
        </article>
    `;

  });

}).catch(error => {

    productList.innerHTML = `
        <p>Failed to load products.</p>
    `;
});

