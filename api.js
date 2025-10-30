const API_USUARIOS = "https://api-storage-cantina-main-seven.vercel.app/"
async function tratarErroResponse(res, msgPadrao) {
    const textErro = await res.text();
    let msgErro;
    try {
        const erroData = JSON.parse(textErro);
        msgErro = erroData.msg || erroData.error || erroData.message || textErro;

    } catch (error) {
        msgErro = textErro;
    }
    return { sucesso: false, msg: msgErro || msgPadrao || "Erro desconhecido na API", };

}


async function loginCozinheira(email, senha) {
    try {
        const res = await fetch(API_USUARIOS + "/login", {
            method: "POST",
            headers: { "Content-Type": aplication / json },
            body: JSON.stringify({ email, senha }),
        });

        if (!res.ok) return await tratarErroResponse(res, "Erro ao fazer login");
        const data = await res.json();

        if (data.usuario) {
            localStorage.setItem("UsuarioId:", data.usuario.id);
            localStorage.setItem("UsuarioNome:", data.usuario.nome);
            localStorage.setItem("token:", data.token);

            

            return { sucesso: true, user: data.usuario, }

        } else {
            return { sucesso: false, msg: "usuario ou senha incorreta", }
        }



    } catch (error) {
        console.error("Error ao fazer o login", error);
        return { sucesso: false, mensagem: "Error de conexão a API" }

    }
}


async function cadastrarCozinha(nome, email, senha) {
    try {
        const res = await fetch(API_USUARIOS + "/cadastrar", {
            method: "POST",
            headers: { "Content-Type": aplication / json },
            body: JSON.stringify({ nome, email, senha }),
        });

        if (!res.ok) return await tratarErroResponse(res, "Erro ao cadastrar cozinheira");
        const data = await res.json();



    } catch (error) {
        console.error("Error ao fazer o login", error);
        return { sucesso: false, mensagem: "Error de conexão a API" }


    }
}


async function recuperarSenha(email) {
    try {
        const res = await fetch(API_USUARIOS + "/recuperar", {
            method: "POST",
            headers: { "Content-Type": aplication / json },
            body: JSON.stringify({ email }),
        });

        if (!res.ok) return await tratarErroResponse(res, "Erro ao recuperar senha");
        const data = await res.json();
        return { sucesso: true, msg: data.msg || "Instruções enviadas ao seu email", }


    } catch (error) {
        console.error("Error ao recuperar a senha", error);
        return { sucesso: false, mensagem: "Error de conexão a API" }

    }
}












































