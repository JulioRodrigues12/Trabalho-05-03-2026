function scrollContato(){
document.getElementById("contato").scrollIntoView({
behavior:"smooth"
});
}


document.getElementById("formContato").addEventListener("submit",function(e){

e.preventDefault();

alert("Mensagem enviada com sucesso!");

});


const numeros = document.querySelectorAll(".numero");

const iniciarContador = () =>{

numeros.forEach(numero =>{

const alvo = +numero.getAttribute("data-target");

let atual = 0;

const incremento = alvo / 100;

const atualizar = () =>{

if(atual < alvo){

atual += incremento;

numero.innerText = Math.floor(atual);

requestAnimationFrame(atualizar);

}else{

numero.innerText = alvo;

}

};

atualizar();

});

};

window.addEventListener("load", iniciarContador);