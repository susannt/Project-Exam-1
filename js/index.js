
const productList = document.getElementById("product-list");

getProducts().then(products => {
  products.slice(0, 16).forEach(product => {

    const productCard = document.createElement("article");
    productCard.classList.add("product-card");

    let productPrice;

    if (product.discountedPrice < product.price) {
        
        productPrice =`
            <p class="old-price">${product.price}</p>
            <p class="discounted-price">${product.discountedPrice}</p>
        `;

    } else {

        productPrice =`
            <p>${product.price}</p>
        `;
}

    productCard.innerHTML = `
        <a href="product/index.html?id=${product.id}">
            <img src="${product.image.url}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${productPrice}</p>
        </a>
    `;

    productList.appendChild(productCard);
  });
});
