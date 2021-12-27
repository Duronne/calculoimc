
const calcular = document.getElementById('calcular');

const calcImc = (() => {


    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura));

        let classificacao = '';
                        
        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso.';
        }

        else if (valorImc < 24.9) {
            classificacao = 'com peso ideal. Parabéns!';
        }
            
        else if (valorImc < 29.9) {
            classificacao = 'com levemente acima do peso';
        }
            
        else if (valorImc < 34.9) {
            classificacao = 'com obesidade grau 1';
        }
            
        else if (valorImc < 39.9) {
            classificacao = 'com obesidade grau 2';
        }
            
        else if (valorImc > 40) {
            classificacao = 'com obesidade grau 3';
        } else {

        }

        resultado.textContent = `${nome} seu IMC é ${valorImc.toFixed(2)}, você está ${classificacao}.`
      
    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
})
calcular.addEventListener('click', calcImc);