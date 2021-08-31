const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

const quickTablePart = document.getElementsByClassName('table__top')[0];

upBtn.addEventListener('click', () => {
    let scaleCoef = quickTablePart.clientWidth / 334.5;
    quickTablePart.style.transform = `translateY(${20 * scaleCoef}px)`;
});

downBtn.addEventListener('click', () => {
    let scaleCoef = quickTablePart.clientWidth / 334.5;
    quickTablePart.style.transform = `translateY(${70 * scaleCoef}px)`;
});


const windowScroll = document;
const animatedBox = document.getElementsByClassName('bot')[0];
const animatedGirl = document.getElementsByClassName('bot__girl')[0];
const animatedHole = document.getElementsByClassName('bot__hole')[0];

windowScroll.addEventListener('scroll', ()=>{
    let dist = document.getElementById('start-appearance').getBoundingClientRect().y;
    console.log(dist)

    if(dist >= -50 && dist <= 650) {
        animatedBox.style.opacity = '1'
        animatedGirl.classList.add('animate_appearance');
        animatedHole.classList.add('animate_resize');

        setTimeout(() => {
            animatedGirl.classList.add('animate_levitate');
        }, 3000)
    }
});