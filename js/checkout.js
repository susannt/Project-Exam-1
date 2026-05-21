const checkout = document.getElementById("checkout-form");

checkout.addEventListener("submit", completePurchase);

function completePurchase(event) {

    event.preventDefault();

    const button = document.querySelector(".cta-submit");

    
    button.disabled = true;
    button.textContent = "Processing...";

    setTimeout(() => {

        localStorage.removeItem("cart");

        window.location.href = "../success/index.html";
    },500);
}