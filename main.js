function tocaSom(isElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll("tecla");

let contador = 0;
while(contador<listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idElementoAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom("#som_tecla_aplausos");
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
    
}