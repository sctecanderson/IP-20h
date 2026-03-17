// 1. Elementos do Banner Principal
const imagemPrincipal = document.getElementById('imagem-principal');
const tituloDinamico = document.querySelector('#texto-dinamico h2');
const textoDinamico = document.querySelector('#texto-dinamico p');

// 2. Miniaturas
const thumbnails = document.querySelectorAll('.visual');

// 3. Função Única de Troca Sincronizada com Animação
thumbnails.forEach(visual => {
    visual.addEventListener('click', () => {

        // 1. Reset da animação
        imagemPrincipal.classList.remove('animar-entrada');
        void imagemPrincipal.offsetWidth; 

        // 2. LÓGICA DE TROCA INTELIGENTE       
        const isMobile = window.innerWidth <= 768;
        
        // Se for mobile, pega o caminho que está no data-mobile. 
        // Se for desktop, pega o src normal da miniatura.
        const novoSrc = isMobile ? visual.getAttribute('data-mobile') : visual.src;

        // 3. Aplica as mudanças
        imagemPrincipal.src = novoSrc;
        tituloDinamico.innerText = visual.getAttribute('data-titulo');
        textoDinamico.innerText = visual.getAttribute('data-texto');

        // 4. Dispara Animação
        imagemPrincipal.classList.add('animar-entrada');
    });
});

// 1. Criar o objeto de áudio (Pode ser um link de um som curto)
const somHover = new Audio('imgs/hover.mp3');
somHover.volume = 0.12; // Volume baixinho para não assustar o usuário

// 2. Selecionar todos os elementos que terão som (Miniaturas e Botões do Menu)
const elementosComSom = document.querySelectorAll('.thumb, #menu a, #btn-home, .acessibilidade button, #visual-sobre, #visual-projetos, #visual-habilidades, #visual-formacao, #J, #A, #O');

// 3. Adicionar o evento em cada um deles
elementosComSom.forEach(elemento => {
    elemento.addEventListener('mouseenter', () => {
        // Reinicia o som para que ele toque de novo se o usuário passar o mouse rápido
        somHover.currentTime = 0; 
        somHover.play();
    });
});

// Seleciona o botão Home
const btnHome = document.getElementById('btn-home');

btnHome.addEventListener('click', (e) => {
    e.preventDefault(); // Impede que a página recarregue ou pule
    

    // 1. Reset da animação (para o banner de boas-vindas também entrar bonito)
    imagemPrincipal.classList.remove('animar-entrada');
    void imagemPrincipal.offsetWidth; 

    // 2. Define os dados de Boas-vindas
    imagemPrincipal.src = "imgs/bem-vindo.jpg"; 
    tituloDinamico.innerText = "Bem-vindo ao meu Portfólio";
    textoDinamico.innerText = "Para o desenvolvimento deste projeto, utilizei uma metodologia de pesquisa ativa, recorrendo a documentações técnicas e ao auxílio de Inteligência Artificial como ferramenta de suporte e tutoria. Essa colaboração foi fundamental para a implementação de boas práticas de código, acessibilidade e interatividade, permitindo que eu focasse na lógica do Dashboard e na experiência do usuário. Explore os cards ao lado para conhecer minha trajetória, meus projetos e minhas competências técnicas no mundo do desenvolvimento.";

    // 3. Aplica a animação de entrada
    imagemPrincipal.classList.add('animar-entrada');
});

// 4. Menu Superior 
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const alvo = link.getAttribute('data-alvo');
        const miniaturaCorrespondente = document.getElementById(`visual-${alvo}`);
        if (miniaturaCorrespondente) {
            miniaturaCorrespondente.click();
        }
    });
});

// Lógica de acessibilidade implementada com auxílio de IA para otimização de UX.
// 5. Acessibilidade: Fonte A+ A-
const btnAumentar = document.getElementById('aumentar');
const btnDiminuir = document.getElementById('diminuir');
let tamanhoFonteAtual = 16; 

btnAumentar.addEventListener('click', () => {
    if (tamanhoFonteAtual < 24) {
        tamanhoFonteAtual += 2;
        textoDinamico.style.fontSize = tamanhoFonteAtual + 'px';
    }
});

btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonteAtual > 12) {
        tamanhoFonteAtual -= 2;
        textoDinamico.style.fontSize = tamanhoFonteAtual + 'px';
    }
});

// 6. Acessibilidade: Alto Contraste
const btnContraste = document.getElementById('contraste');
btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});