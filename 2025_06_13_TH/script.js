const slider = document.getElementById('slider');
const tong = document.querySelectorAll('.slide').length;
const cham = document.getElementById('cham');
let now = 0;

function change(n) {
    now += n;
    if (now < 0) now = tong - 1;
    if (now >= tong) now = 0;
    slider.style.transform = `translateX(${-now * 100}%)`;
    updatecham();
}

for (let i = 0; i < tong; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        now = i;
    });
    cham.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');


function updatecham() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === now);
    });
}
change(0)
setInterval(() => {
    change(1);
}, 5000);
