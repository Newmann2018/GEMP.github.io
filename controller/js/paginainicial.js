let userlogado = JSON(localStorage.getItem("userlogado"))
let logado = document.querySelector("#logado")

logado.innerHTML ="olá ${userlogado.nome} "

if(localStorage.getItem("token") == null){
    alert("você precissa estar logado para acessar essa pagina")
    window.location.href="index.html"
}


function sair(){
    localStorage.removeItem("token")
    localStorage.removeItem("userlogado")
    window.location.href="index.html"
}