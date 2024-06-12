function imc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let IMCbase = peso / (altura * altura);
    let IMC = parseFloat(IMCbase.toFixed(2));
    let idade = document.getElementById("idade").value;

    // determinar comorbidade
    let comorbidade;
    if (IMC < 18.5) {
        comorbidade = 10;
    } else if (IMC >= 18.5 && IMC < 25) {
        comorbidade = 1;
    } else if (IMC >= 25 && IMC < 30) {
        comorbidade = 6;
    } else if (IMC >= 30 && IMC < 35) {
        comorbidade = 10;
    } else if (IMC >= 35 && IMC < 40) {
        comorbidade = 20;
    } else if (IMC >= 40) {
        comorbidade = 30;
    };

    // calculo dos planos
    let planoBasicoA = 100 + (idade * 10 * (IMC / 10));
    let planoStandardA = (150 + (idade * 15)) * (IMC / 10);
    let planoPremiumA = (200 - (IMC * 10) + (idade * 20)) * (IMC / 10);

    let planoBasicoB = 100 + (comorbidade * 10 * (IMC / 10));
    let planoStandardB = (150 + (comorbidade * 15)) * (IMC / 10);
    let planoPremiumB = (200 - (IMC * 10) + (comorbidade * 20)) * (IMC / 10);

    // determinar plano mais vantajoso
    var arr = [planoBasicoA, planoStandardA, planoPremiumA, planoBasicoB, planoStandardB, planoPremiumB];

    var melhorPreço = Math.min(...arr);
    console.log(arr);
    console.log(melhorPreço);

    //mostrar resultados
    let element = document.getElementById('resultados');
    if(peso > 0 && altura > 0 && idade > 0){
        element.style.display = 'block'
    } else {
        alert("Preencha os campos.")
    };
    let melhorPlano;
    if (melhorPreço == planoBasicoA){
        melhorPlano = 'Plano Básico A'
    } else if (melhorPreço == planoStandardA){
        melhorPlano = 'Plano Standard A'
    } else if (melhorPreço == planoPremiumA){
        melhorPlano = 'Plano Premium A'
    } else if (melhorPreço == planoBasicoB){
        melhorPlano = 'Plano Básico B'
    } else if (melhorPreço == planoStandardB){
        melhorPlano = 'Plano Standard B'
    } else if (melhorPreço == planoPremiumB){
        melhorPlano = 'Plano Premium B'
    };

    document.getElementById('basicoA').innerText = 'R$' + planoBasicoA.toFixed(2);
    document.getElementById('standardA').innerText = 'R$' + planoStandardA.toFixed(2);
    document.getElementById('premiumA').innerText = 'R$' + planoPremiumA.toFixed(2);
    document.getElementById('basicoB').innerText = 'R$' + planoBasicoB.toFixed(2);
    document.getElementById('standardB').innerText = 'R$' + planoStandardB.toFixed(2);
    document.getElementById('premiumB').innerText = 'R$' + planoPremiumB.toFixed(2);

    document.getElementById('melhorPreço').innerText = 'O melhor plano é o ' + melhorPlano + ' custando R$' + melhorPreço.toFixed(2);
}
