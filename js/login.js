const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const result = await loginAccount(email, password);

    console.log(result);

    if (result.data) {
        alert("Login successful");

        localStorage.setItem("token", result.data.accessToken);

        window.location.href ="/";
    } else {
        alert(result.errors?.[0]?.message || "Login failed");
    }
});

