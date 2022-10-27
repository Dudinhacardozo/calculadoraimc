
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = Number(document.getElementById('altura').value);
    const peso = Number(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        let classe_classificacao = '';

        if (valorIMC <= 15.99) {
            classificacao = 'Magreza Grave';
            classe_classificacao = 'magreza-grave';
        } else if (valorIMC >= 16) {
            classificacao = 'Magreza Moderada';
            classe_classificacao = 'magreza-moderada';
        }else if (valorIMC <= 16.99) {
            classificacao = 'Magreza Moderada';
            classe_classificacao = 'magreza-moderada';
        }
        else if (valorIMC >= 17) {
            classificacao = 'Magreza Leve';
            classe_classificacao = 'magreza-leve';
        }else if (valorIMC <= 18.5) {
            classificacao = 'Magreza Leve';
            classe_classificacao = 'magreza-leve';
        }
         else if (valorIMC >= 18.5) {
            classificacao = 'Saudável';
            classe_classificacao = 'saudavel';
        } else if (valorIMC <= 24.9) {
            classificacao = 'Saudável';
            classe_classificacao = 'saudavel';
        } 
        else if (valorIMC >= 25) {
            classificacao = 'Sobrepeso';
            classe_classificacao = 'sobrepeso';
        }else if (valorIMC <= 29.9) {
            classificacao = 'Sobrepeso';
            classe_classificacao = 'sobrepeso';
        }
         else if (valorIMC >= 30) {
            classificacao = 'Obesidade Grau 1';
            classe_classificacao = 'obesidadeGrau1';
        }else if (valorIMC <= 34.9) {
            classificacao = 'Obesidade Grau 1';
            classe_classificacao = 'obesidadeGrau1';
        }
         else if (valorIMC >= 35) {
            classificacao = 'Obesidade Grau 2 (Severa)';
            classe_classificacao = 'obesidadegrau2';
        }  else if (valorIMC >= 39.9) {
            classificacao = 'Obesidade Grau 2 (Severa)';
            classe_classificacao = 'obesidadegrau2';
        } 
        else if (valorIMC >= 40) {
            classificacao = 'Obesidade Grau 3 (Mórbida)';
            classe_classificacao = 'obesidadegrau3';

        }
        resultado.innerHTML = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        resultado.className = classe_classificacao;

    } else {
        resultado.innerHTML = 'Preencha todos os campos!!!';
    }


}

calcular.addEventListener('click', imc);