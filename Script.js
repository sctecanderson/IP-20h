// 1. Elementos do Banner Principal
const imagemPrincipal = document.getElementById('imagem-principal');
const tituloDinamico = document.querySelector('#texto-dinamico h2');
const textoDinamico = document.querySelector('#texto-dinamico p');

// 2. Miniaturas
const thumbnails = document.querySelectorAll('.thumb');

// 3. Função Única de Troca Sincronizada com Animação
// Atualize seu bloco de clique das miniaturas no Script.js:

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // 1. Reset da animação
        imagemPrincipal.classList.remove('animar-entrada');
        void imagemPrincipal.offsetWidth; 

        // 2. LÓGICA DE TROCA INTELIGENTE
        // Verifica se a largura da tela é de celular (menor que 768px)
        const isMobile = window.innerWidth <= 768;
        
        // Se for mobile, pega o caminho que está no data-mobile. 
        // Se for desktop, pega o src normal da miniatura.
        const novoSrc = isMobile ? thumb.getAttribute('data-mobile') : thumb.src;

        // 3. Aplica as mudanças
        imagemPrincipal.src = novoSrc;
        tituloDinamico.innerText = thumb.getAttribute('data-titulo');
        textoDinamico.innerText = thumb.getAttribute('data-texto');

        // 4. Dispara Animação
        imagemPrincipal.classList.add('animar-entrada');
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
    imagemPrincipal.src = "imgs/bem-vindo.jpg"; // Certifique-se que o nome da imagem está correto
    tituloDinamico.innerText = "Bem-vindo ao meu Portfólio";
    textoDinamico.innerText = "Para o desenvolvimento deste projeto, utilizei uma metodologia de pesquisa ativa, recorrendo a documentações técnicas e ao auxílio de Inteligência Artificial como ferramenta de suporte e tutoria. Essa colaboração foi fundamental para a implementação de boas práticas de código, acessibilidade e interatividade, permitindo que eu focasse na lógica do Dashboard e na experiência do usuário. Explore os cards ao lado para conhecer minha trajetória, meus projetos e minhas competências técnicas no mundo do desenvolvimento.";

    // 3. Aplica a animação de entrada
    imagemPrincipal.classList.add('animar-entrada');

    // 4. (Opcional) Volta para o topo se o usuário estiver lá embaixo
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Menu Superior (Sincronizado com as miniaturas)
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const alvo = link.getAttribute('data-alvo');
        const miniaturaCorrespondente = document.getElementById(`thumb-${alvo}`);
        if (miniaturaCorrespondente) {
            miniaturaCorrespondente.click();
        }
    });
});

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