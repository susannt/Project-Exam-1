const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const result = await registerAccount(name, email, password);

    console.log(result);

    if (result.data) {
        alert("Acc created!");
        window.location.href = "./login.html";
    } else {
        alert(result.errors?.[0]?.message || "Could not create account");
    }
});
