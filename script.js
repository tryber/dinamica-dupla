const inputSenha = document.querySelector("#input-senha");
function checkCaracter() {
  console.log(inputSenha.value);
}

inputSenha.addEventListener("keyup", checkCaracter);
