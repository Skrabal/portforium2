
let a = 2;
let b = 4;

function cena(a, b) {
    let vysledek = a - b;
    console.log(vysledek);
}

cena(a, b);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Přidá třídu pro animaci
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.content').forEach(element => {
    observer.observe(element);
});