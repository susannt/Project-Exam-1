const checkout = document.getElementById("checkout-form");

checkout.addEventListener("submit", completePurchase);

function completePurchase(event) {

    event.preventDefault();

    localStorage.removeItem("cart");

    window.location.href = "../success/index.html";
}