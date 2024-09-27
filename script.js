var peso;
var altura;
var resultado;
var imc;


function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    resultado = document.getElementById('resultado');
    imc = peso / (altura * altura);
    
    

    if(imc < 17) {
        resultado.innerHTML = '<br> Seu resultado foi ' + imc.toFixed(2) + ' | <span>você está muito abaixo do peso!</span>'
    }else if( imc >= 17 && imc < 18.49) {
        resultado.innerHTML = '<br> Seu resultado foi ' + imc.toFixed(2) + ' | <span>você está abaixo do peso!</span>'
    }else if(imc >= 18.49 && imc < 24.99) {
        resultado.innerHTML = '<br> Seu resultado foi ' + imc.toFixed(2) + '<br>  <span id="ideal">você está no peso ideal!</span>'
    }else if(imc >= 25 && imc < 29.99) {
        resultado.innerHTML = '<br> Seu resultado foi ' + imc.toFixed(2) + ' |<span> você está acima do peso!</span>'
    }else if(imc > 30) {
        resultado.innerHTML = '<br> Seu resultado foi ' + imc.toFixed(2) + ' | <span>Cuidado, obesidade!!</span>'
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';


    
}