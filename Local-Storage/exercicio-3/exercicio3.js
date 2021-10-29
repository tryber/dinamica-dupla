// Exercício 3
// Crie uma lista para adicionar ao local storage.
// Todo o código para a lógica de criar a lista já está criado, visto que vocês já aprenderam isso no projeto todo-list.

// Código que captura o botão do html pelo DOM
const addButton = document.querySelector('#btn-add');

// Código que captura o input do html pelo DOM
const inputList = document.querySelector('.list-input');

// Código que captura o container das listas do html pelo DOM
const listContainer = document.querySelector('.list-content');

// Função que cria a ol
function createOl() {
  const ol = document.createElement('ol');
  ol.classList.add('list-father');
  listContainer.appendChild(ol);
}

createOl();

// Evento que adiciona as li como filhos da ol
addButton.addEventListener('click', function () {
  const ol = document.querySelector('ol');
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.innerText = inputList.value;
  ol.appendChild(li);
});
