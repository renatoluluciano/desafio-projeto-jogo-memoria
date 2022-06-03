const cardsClass = document.querySelectorAll('.cards');

let classAbreImagem = "abre_imagem";

let abrirCarta = false;
let primeiraCarta, segundaCarta;
let fecharTabuleiro = false;

function revelaImagem(){ 
    if(fecharTabuleiro) return;
    if(this === primeiraCarta) return;

    this.classList.add(classAbreImagem);

    if(!abrirCarta){
        abrirCarta = true;
        primeiraCarta = this;
        return
    }

    segundaCarta = this;
    abrirCarta = false;

    verificaCartasIguais();

}

function verificaCartasIguais(){      
        

    if(primeiraCarta.dataset.cards === segundaCarta.dataset.cards){
        
        desativaCards();  

        return;
    }

    fechaCards();
}

function fechaCards(){
    
    fecharTabuleiro = true;
   

    setTimeout(() =>{
        
       primeiraCarta.classList.remove(classAbreImagem);
       segundaCarta.classList.remove(classAbreImagem);

        trancarTabuleiro();
        
    }, 2500);

}

function desativaCards(){

   
        
    primeiraCarta.removeEventListener('click', revelaImagem);
    segundaCarta.removeEventListener('click', revelaImagem);

    trancarTabuleiro();

   
}

function trancarTabuleiro(){

    [abrirCarta, fecharTabuleiro] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

(function embaralharCartas(){
    cardsClass.forEach((cards) => {

        let posicoes = Math.floor(Math.random()* cardsClass.length);

        cards.style.order = posicoes;

    })
})();


cardsClass.forEach((cardsClass) => {

    cardsClass.addEventListener('click', revelaImagem);

})
