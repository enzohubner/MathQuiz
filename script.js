function geraQuestao(){
    const num1 = Math.floor(Math.random() *10) + 1;
    const num2 = Math.floor(Math.random() *10) + 1;
    const operacao = ["+", "-", "*", "/"][Math.floor(Math.random()*4)];
    let resposta;
    let textoQuestao = `Quanto é ${num1} ${operacao} ${num2}?`;

    switch (operacao) {
        case "+":
            resposta = num1 + num2;
            break;
        case "-":
            resposta = num1 - num2;
            break;
        case "*":
            resposta = num1 * num2;
            break;
        case "/":
            resposta = num1 / num2;
            break;
    }

    document.getElementById('questao').innerText = textoQuestao;
    window.resposta = resposta.toFixed(2);

}

function proximaQuestao(){
    document.getElementById('resposta').value = '';
    geraQuestao();
    displayResultado();
}

function displayResultado(){
    if (totalQuestao > 0){
        const pontuacao =((respostaCorreta/totalQuestao) *100).toFixed(2);
        document.getElementById('resultado').innerText = 'Pontuacao: ${pontuacao} (${respostaCorreta}/${totalQuestao})';
    } else{
        document.getElementById('resultado').innerText = '';
    }

}

function verificaResposta() {
    const respostaUsuario = parseFloat(document.getElementById('resposta').value).toFixed(2);
    if (respostaUsuario == resposta) {
        document.getElementById('resultado').innerText = "Correto!";
        respostaCorreta++;
    } else {
        document.getElementById('resultado').innerText = "Incorreto! A resposta correta era: " + resposta;
    }
    totalQuestao++;
    displayResultado();
}

geraQuestao();
displayResultado();