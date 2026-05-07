// Carousel

const carouselImages = document.getElementById("carousel-images")

getProducts().then(products => {
    
    const carouselProducts = products.slice(13,16);

    carouselProducts.forEach(product => {
    
        carouselImages.innerHTML +=`
            <a href="product/index.html?id=${product.id}">
                <img src="${product.image.url}" alt="${product.title}">
            </a>
        `;
    });
});


// Product List

const productList = document.getElementById("product-list");

getProducts().then(products => {

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
                <p>${product.price}</p>
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
});

