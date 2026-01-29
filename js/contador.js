const contadores = document.querySelectorAll('[data-contador]');

const iniciarContador = (elemento) => {
    const valorFinal = +elemento.getAttribute('data-contador');
    const prefix = elemento.getAttribute('data-prefix') || '';
    const sufix = elemento.getAttribute('data-sufix') || '';

    let valorAtual = 0;
    const incremento = Math.ceil(valorFinal / 100);

    const contador = setInterval(() => {
        valorAtual += incremento;

        if (valorAtual >= valorFinal) {
            elemento.innerText = `${prefix}${valorFinal}${sufix}`;
            clearInterval(contador);
        } else {
            elemento.innerText = `${prefix}${valorAtual}${sufix}`;
        }
    }, 20);
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            iniciarContador(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

contadores.forEach(contador => {
    observer.observe(contador);
});
