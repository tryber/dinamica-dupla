let chekbox = document.querySelector('#agreement');
let botao = document.querySelector('#submit-btn');

chekbox.addEventListener('click', function(){
    if (chekbox.checked === false){
        botao.disabled = true
    }else{
        botao.disabled = false
    };
})





// function verificaChek() {
//     if (chekbox.checked === false){
//         botao.disabled = true
//     }
// }
// verificaChek();