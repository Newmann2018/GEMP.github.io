let btn = document.querySelector('#verSenha');
let btnConfirmSenha=document.querySelector('#confirmSenha');
let nome=document.querySelector('#nome');
let labelNome=document.querySelector('#labelNome');
let validnome = false;
let nome=document.querySelector('#usuario');
let labelUsuario=document.querySelector('#labelUsuario');
let validusuario = false;
let nome=document.querySelector('#senha');
let labalSenha=document.querySelector('#labalSenha');
let validSenha = false;
let nome=document.querySelector('#confirmSenha');
let labelConfirmSenha=document.querySelector('#labelconfirmSenha');
let validConfirmeSenha = false;
let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess"); 


nome.addEventListener('keyup',()=>{
    if(nome.ariaValue.length <= 4 ){
        labelNome.setAttribute('style','color:red');
        labelNome.innerHTML='nome*insira no minimo 4 caracteres';
        nome.setAttribute('style','border-color:red');
        validnome = false;
    }else{
        labelNome.setAttribute('style','color:green');
        labelNome.innerHTML='Nome';
        nome.setAttribute('style','border-color:green');
        validnome = true;
    }
});
usuario.addEventListener('keyup',()=>{
    if(usuario.ariaValue.length <= 4 ){
        labelUsuario.setAttribute('style','color:red');
        labelUsuario.innerHTML='usuario*insira no minimo 4 caracteres';
        usuario.setAttribute('style','border-color:red');
        validusuario = false;
    }else{
        labelUsuario.setAttribute('style','color:green');
        labelUsuario.innerHTML='usuario';
        usuario.setAttribute('style','border-color:green');
        validusuario = true;
    }
});
senha.addEventListener('keyup',()=>{
    if(nome.ariaValue.length <=5 ){
        labelSenha.setAttribute('style','color:red');
        labelSenha.innerHTML='senha*insira no minimo 6 caracteres';
        semha.setAttribute('style','border-color:red');
        validSenha = false;
    }else{
        labelSenha.setAttribute('style','color:green');
        labelSenha.innerHTML='senha';
        senha.setAttribute('style','border-color:green');
        validSenha =true;
    }
});
btnConfirmSenha.addEventListener('keyup',()=>{
    if(senha.Value != ConfirmSenha.Value ){
        labelConfirmSenha.setAttribute('style','color:red');
        labelConfirmSenha.innerHTML='Confirmar senha*as senhas não conferem';
        ConfirmSenha.setAttribute('style','border-color:red');
        validConfirmeSenha =false;
    }else{
        labelConfirmSenha.setAttribute('style','color:green');
        labelConfirmSenha.innerHTML='confirmar senha';
        ConfirmSenha.setAttribute('style','border-color:green');
        validConfirmeSenha = true;
    }
});
function cadastrar(){
   if( validnome && validusuario && validSenha && validConfirmeSenha){
        let listaUser = JSON (localStorang.getItem("listaUser")|| "[]")
        listaUser.push(
            {
                nomeCad:nome.Value,
                userCad:usuario.Value,
                senhaCad:senha.Value,
            }
        )
        localStorage.setItem('listaUser',JSON.stringify(listaUser))


    msgSuccess.setAttribute("style","display:block");
    msgSuccess.innerHTML="<strong>cadastrando Usuario... </strong>";
    msgError.setAttribute("style","display:none");
    msgError.innerHTML="";
   
    setTimeout(()=>{
        window.location.href="index.html"
    },3000);
    


   }else{
    msgError.setAttribute("style","display:block");
    msgError.innerHTML="<strong>preencha todos os campos corretamente antes de cadastrar </strong>";
    msgSuccess.setAttribute("style","display:none");
    msgSuccess.innerHTML="";
   }
}
btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha');
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text');
    }
    else{
        inputSenha.setAttribute('type','password');
    }
});
btnConfirm.addEventListener('click',()=>{
    let inputconfirmSenha = document.querySelector('#confirmSenha');
    if(inputconfirmSenha.getAttribute('type') == 'password'){
        inputconfirmSenha.setAttribute('type','text');
    }
    else{
        inputconfirmSenha.setAttribute('type','password'); 
    }
});