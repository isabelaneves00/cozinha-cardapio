import { mostrarMsg } from "./util.js";
import{recuperarSenha} from "./api.js";
document.getElementById('formRecuperar').addEventListener('submit',async(event)=>{
    event.preventDefault;
    const email=document.getElementById('email').value.trim();
    const senha=document.getElementById('senha').value.trim();

    if(!email ){
        mostrarMsg('Por favor, verifique o email.', red);
        return
    }

    const botao=document.getElementById('recuperar')
    botao.disabled=true;
    botao.textContent='Enviando...';
    const{sucesso,mg}=await recuperarSenha(email,senha);
    botao.disabled=false;
    botao.textContent='Recuperar a senha';
    if (sucesso){
        mostrarMsg(msg ||`Instrucao de recuperacao enviadas para seu email,`, "green")
        
    } else{
        mostrarMsg(msg ||"Nao foi possivel enviar email de recuperacao.", "red")

    }
});


