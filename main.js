let button=document.getElementById('conferir');
let chances=5

button.addEventListener('click',function(){

    let resultado=Math.floor(Math.random() * (max-min+1)+min);

    if (isNaN(resultado)) {
        resultado="Insira um número";
    }

    // document.querySelector('#resultado').textContent=resultado;


})