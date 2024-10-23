const cards = document.querySelectorAll('.header-figure');

cards.forEach(figure => {
    figure.addEventListener('click', () => {
        alert('Amo a momo');
    });
});

const formBtn = document.querySelector('.contact-button');
formBtn.addEventListener('click', () => {
    alert('Gracias por contactarme');
});

const headerTitle = document.querySelector('.header-title span');
const headerSubtitle = document.querySelector('.header-text');
let headerSubtitleIndex = 0;
let headerTitleIndex = 0;

const headerTitles = ['Desarrollador Web', 'Fan de Twice', 'Momo mi amor', 'Desarrollador Fron-end'];

setInterval(() => {
    headerSubtitle.textContent = headerTitles[headerSubtitleIndex];
    headerSubtitleIndex = (headerSubtitleIndex + 1) % headerTitles.length;
}, 2000);

headerTitle.addEventListener('click', () => {
    if (headerTitleIndex === 0) {
        headerTitle.style.webkitTextStrokeWidth = '3px';
        headerTitle.style.color = 'transparent';
        headerTitleIndex++;
    } else {
        headerTitle.style.webkitTextStrokeWidth = '0px';
        headerTitle.style.color = 'var(--color-2)';
        headerTitleIndex--;
    }
});    