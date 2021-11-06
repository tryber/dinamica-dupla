const inputSenha = document.querySelector("#input-senha");
const botaoForm = document.querySelector("#submit-btn");
function checkCaracter() {
  const valor = inputSenha.value;
  const regex = /\W|_/g;
  if (
    valor.match(/[A-Z]/g) &&
    valor.match(/[a-z]/g) &&
    valor.match(/[0-9]/g) &&
    valor.match(regex)
  ) {
    inputSenha.style.borderBottom = "2px solid black";
  } else {
    inputSenha.style.borderBottom = "2px solid red";
  }
}

inputSenha.addEventListener("keyup", checkCaracter);
