let btn = document.querySelector('.fa fa-eye')
btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }
    else{
        inputSenha.setAttribute('type','password') 
    }
})
function entrar (){
    let usuario = document.querySelector("#usuario")
    let userlabel = document.querySelector("#userlabel")

    let senha = document.querySelector("#senha")
    let senhalabel = document.querySelector("#senhalabel")

    let msgError = document.querySelector("#msgError")
    let listaUser = []

    let userValid = {
        nome:'',
        user:'',
        senha:''
    }
    listaUser = JSON (localStorage.getItem('listaUser'))

    listaUser.forEach((item)=>{
        if(usuario.Valid == item.userCad && senha.Valid == item.senhaCad){
            userValid = {
                nome:item.nomeCad,
                user:item.userCad,
                senha:item.senhaCad
            }
        }
    })
    if(usuario.Value == userValid.user && senha.value == userValid.senha){
        window.location.href="paginainicial.html"
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2) 
        localStorage.setItem('token',token)
        localStorage.setItem("userlogado",JSON.stringify(userValid))
    }
    else{
        userlabel.setAttribute("style","color:red")
        usuario.setAttribute("style","border-color:red")
        senhalabel.setAttribute("style","color:red")
        senha.setAttribute("style","border-color:red")
        msgError.setAttribute("style","display:block")
        msgError.innerHTML="usuário ou senha incorretos"
        usuario.focus()
    }
    
}