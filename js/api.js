const productsUrl = "https://v2.api.noroff.dev/online-shop";
const registerUrl = "https://v2.api.noroff.dev/auth/register";
const loginUrl = "https://v2.api.noroff.dev/auth/login";

// All products

async function getProducts() {
  const response = await fetch(productsUrl);
  const result = await response.json(); 
  return result.data;
}

// Products by id

async function getProduct(id) {
  const response = await fetch(`${productsUrl}/${id}`);
  const product = await response.json();
  return product.data;
}

// Register account

async function registerAccount(name, email, password) {
  const response = await fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  });

  const result = await response.json();
  return result;
}

// Login account

async function loginAccount(email, password) {
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  });
  
  const result = await response.json();
  return result;
}