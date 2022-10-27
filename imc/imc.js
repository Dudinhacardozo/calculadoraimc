
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        let classe_classificacao = '';

        if (valorIMC <= 15.99) {
            classificacao = 'Magreza Grave';
            classe_classificacao = 'magreza-grave';
        } else if (valorIMC >= 16) {
            classificacao = 'Magreza moderada';
            classe_classificacao = 'magreza-leve'
        }
        else if (valorIMC >= 17) {
            classificacao = 'Magreza Leve';
            classe_classificacao = 'magreza-leve'
        } else if (valorIMC >= 18.5) {
            classificacao = 'Saudável';
            classe_classificacao = 'saudável'
        } else if (valorIMC >= 25) {
            classificacao = 'Sobrepeso';
            classe_classificacao = 'sobrepeso'
        } else if (valorIMC >= 30) {
            classificacao = 'Obesidade Grau 1';
            classe_classificacao = 'obesidade-grau1'
        } else if (valorIMC >= 35) {
            classificacao = 'Obesidade Grau 2 (Severa)';
            classe_classificacao = 'obesidade-grau2(Severa)'
        } else if (valorIMC >= 40) {
            classificacao = 'Obesidade Grau 3 (Mórbida)';
            classe_classificacao = 'obesidade-grau3(Mórbida)'

        }
        resultado.innerHTML = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        resultado.className = classe_classificacao;

    } else {
        resultado.innerHTML = 'Preencha todos os campos!!!';
    }


}

calcular.addEventListener('click', imc);