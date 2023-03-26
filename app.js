const button = document.getElementById("login");

button.addEventListener("click", function (ev) {
  ev.preventDefault();
  const email = document.getElementById("email").value;
  if (email == "") {
    alert("Insira um email válido.");
  } else {
    console.log(email);
  }
  const senha = document.getElementById("password").value;
  if (senha == "") {
    alert("Insira uma senha válida");
  } else {
    console.log(senha);
  }
});
