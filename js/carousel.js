const depoimentos = document.querySelectorAll('.depoimento');
const btnPrev = document.querySelector('.carousel-btn.prev');
const btnNext = document.querySelector('.carousel-btn.next');

let indexAtual = 0;

function mostrarDepoimento(index) {
    depoimentos.forEach(dep => dep.classList.remove('active'));
    depoimentos[index].classList.add('active');
}

btnNext.addEventListener('click', () => {
    indexAtual = (indexAtual + 1) % depoimentos.length;
    mostrarDepoimento(indexAtual);
});

btnPrev.addEventListener('click', () => {
    indexAtual = (indexAtual - 1 + depoimentos.length) % depoimentos.length;
    mostrarDepoimento(indexAtual);
});

/* autoplay */
setInterval(() => {
    indexAtual = (indexAtual + 1) % depoimentos.length;
    mostrarDepoimento(indexAtual);
}, 5000);
