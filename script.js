const termos = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn')

termos.addEventListener('click', (e) =>{
  if(e.target.checked) {
    btnEnviar.style.display = 'block';
    return
  } 
  btnEnviar.style.display = 'none'; 
})