const monstro = document.querySelector('.monstro');
const pipe = document.querySelector('.pipe')

const jump = () => {
    monstro.classList.add('jump');

    setTimeout(() => {
       
        monstro.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const monstroPosition = +window.getComputedStyle(monstro).bottom.replace('px', '');

    console.log(monstroPosition);

    if (pipePosition <= 120 && pipePosition > 0 && monstroPosition < 38) {

       pipe.style.animation = 'none';  
       pipe.style.left = `${pipePosition}px`;

       monstro.style.animation = 'none';  
       monstro.style.bottom = `${pipePosition}px`;

       monstro.src = 'imagens/bateu.png';
       monstro.style.width = '350px'
       monstro.style.marginLeft= "160px"
       monstro.style.bottom = '20px'

       clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump);

