window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scroll', window.scrollY > 0);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('loadAni', entry.isIntersecting);
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.contentTxt, .contentImage, .contentabout').forEach(element => {
    observer.observe(element);
});

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const mainPage4 = document.getElementById('mainPage4');
    const mainPage4Top = mainPage4.getBoundingClientRect().top + scrollY;

    const sideBar1 = document.querySelector('#mainPage4 .sideBar1');
    const sideBar2 = document.querySelector('#mainPage4 .sideBar2');

    const scrollRatio = (scrollY - mainPage4Top + windowHeight) / (windowHeight + mainPage4.offsetHeight);
    const multiplier = 2;
    const translateValue = Math.min(100, scrollRatio * 100 * multiplier);

    sideBar1.style.transform = `translate3d(-${translateValue}%, 0, 0)`;
    sideBar2.style.transform = `translate3d(${translateValue}%, 0, 0)`;
});