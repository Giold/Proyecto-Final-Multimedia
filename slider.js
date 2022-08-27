const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const botonderecha = document.querySelector("#btn-der");
const botonizquierda = document.querySelector("#btn-izq");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginleft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginleft="-100%";

    },500);
}

function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft="0%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginleft="-100%";

    },500);
}

botonderecha.addEventListener('click',function(){
    moverDerecha();
});

botonizquierda.addEventListener('click',function(){
    moverIzquierda();
});

setInterval(function() {
    moverDerecha();
}, 5000);