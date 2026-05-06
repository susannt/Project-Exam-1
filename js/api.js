const productsUrl = "https://v2.api.noroff.dev/online-shop";
const loginUrl = "https://v2.api.noroff.dev/auth/login";
const registerUrl = "https://v2.api.noroff.dev/auth/register";


async function getProducts() {
  const response = await fetch(productsUrl);
  const result = await response.json(); 
  return result.data;
}

async function getProduct(id) {
  const response = await fetch(`${productsUrl}/${id}`);
  const product = await response.json();
  return product.data;
}