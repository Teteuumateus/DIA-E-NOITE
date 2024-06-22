const tglDark = document.querySelector("#toggle--dark");
const body = document.body
const imagem = document.querySelector("img");
let temaPreferido = localStorage.getItem("Tema")

tglDark.addEventListener("change", alterarTema)

function carregarTema() {
    if (temaPreferido == "dark") {
        body.classList.add("dark");
        imagem.setAttribute("src", "noite.jpg")
    } else {
        body.classList.remove("dark");
        imagem.setAttribute("src","dia.jpg")
    }
}

function alterarTema() {
    //Existe a classe Dark no body?
   if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    imagem.setAttribute("src","dia.jpg")
    localStorage.setItem("tema", "")

   }    else {
    body.classList.add("dark");
    imagem.setAttribute("src", "noite.jpg")
    localStorage.setItem("tema", "dark")
   }
}   

const resposta = prompt("Qual sua senha?")
localStorage.setItem("senha", resposta)
console.log(localStorage.getItem("senha"))

carregarTema()