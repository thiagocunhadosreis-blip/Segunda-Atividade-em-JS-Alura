//Variáveis
    //comum
let chute, nA, maxN, tentativas = 0;
    //document.
let h1 = document.querySelector(`h1`),
    p = document.querySelector(`p`),
    h2Tentativas = document.querySelector(`h2`),
    input = document.querySelector(`input`),
    button1 = document.getElementById(`button1`),
    button2 = document.getElementById(`button2`);
    //suporte 
let jogando = false, suporteTitulo = 1;

//Funções
    //principal
function resetPag() {
        //texto1
    suporteTitulo == 1 ? h1.innerHTML = `Jogo do Nº Secreto` : 
    suporteTitulo == 2 ? h1.innerHTML = `Nº Secreto é maior que ${chute}` :
    suporteTitulo == 3 ? h1.innerHTML = `Nº Secreto é menor que ${chute}` :
    /*suporteTitulo == 4 ?*/ h1.innerHTML = `Você Ganhou!!!`; 
        //testo2
    h2Tentativas.innerHTML = `Tentativa(s):${tentativas}`;
        //texto3
    suporteTitulo == 4 ? p.innerHTML = `` :
    jogando == false ? p.innerHTML = `Escolha o Nº máximo:` : 
    /*jogando == true ?*/ p.innerHTML = `Chute um Nº entre 1 e ${maxN}`;
        //button1
    jogando == false ? button1.innerHTML = `Começar` : button1.innerHTML = `Chutar`
        //button2
    suporteTitulo == 4 ? button2.removeAttribute(`disabled`) : button2.setAttribute(`disabled`, true);
        //input
    input.value = ``
};  
    //cáuculo
function aleatorio(b) {
    return (Math.floor(b * Math.random()) + 1);
};
    //button
function comecarOuChutarOuLista() {
    if (jogando == false) {
        maxN = input.value;
        nA = aleatorio(maxN);
        jogando = true;
        input.setAttribute(`max`, maxN)
    } else {
            tentativas++;
            chute = input.value;
            chute < nA ? suporteTitulo = 2 :
            chute > nA ? suporteTitulo = 3 :
            /*chute == nA ?*/ suporteTitulo = 4;
    };
    resetPag();
    return maxN, nA, jogando, mostrarLista;
};
function novoJogo() {
    jogando = false;
    suporteTitulo = 1;
    tentativas = 0;
    resetPag();
};

//Comandos
    resetPag();