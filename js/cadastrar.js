import { mostrarMsg } from "./util.js";
import{cadastrarCozinha} from "./api.js";
document.getElementById('formCadastrar').addEventListener('submit',async(event)=>{
    event.preventDefault();
    const confirmarSenha=document.getElementById('confirmar').value.trim();
    const nome=document.createElementById('nome').value.trim();
    const email=document.getElementById('email').value.trim();
    const senha=document.getElementById('senha').value.trim();
    if(!email|| !senha ||confirmarSenha){
        mostrarMsg('Por favor, preencha todos os campos.', red);
        return
    }
    if(senha !== confirmarSenha){
        mostrarMsg(`As senhas não conferem`,red)
        return;
    }

    const botao=document.getElementById('cadastrar')
    botao.disabled=true;
    botao.textContent='Carregando...';
    const{sucesso,mg,}=await CadastrarCozinheira(email,senha,nome);
    botao.disabled=false;
    botao.textContent='Cadastrar-se';


    if (sucesso){
        mostrarMsg(`Cadastro realizado com sucesso,` ,"green")
        setTimeout(()=>{

            window.location.href='sistema.html'
        },150);

    } else{
        mostrarMsg(msg,"red");

    }

});

