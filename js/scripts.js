var nome = "";
var data = "";
var email = "";
var telefone = "";
var loginnew = "";
var loginuser = "";
var pass="";
var senha = "";
var type = "";
var id = -1;
var user = [];
var c = 0;
var c1;
var cont = 0;
var cont = 0;
var estado = false;

//função para armazenar os valores do usuario
//é chamada sempre que a funcão cadUser é chamada
function usuario(id_, nome_, data_, email_, telefone_, loginnew_, senha_, type_){
    this.id_ = id_;
    this.nome_ = nome_;
    this.data_ = data_;
    this.email_ = email_;
    this.telefone_ = telefone_;
    this.loginnew_ = loginnew_;
    this.senha_ = senha_;
    this.type_ = type_;
}

//funcão para verificação do login
function login(){
    c1 = 0;
    cont = 0;
    var cont = 0;
    loginuser = document.getElementById("loginuser").value; //recebe o valor do input login
    pass = document.getElementById("pass").value; //recebe o valor do input senha
         
    while(cont == 0){ //condição while para verificar todos os emails
        if(loginuser == user[c1].email_){ //condição if para verificar se o email digitado tem armazenado no sistema              

            if(pass == user[c1].senha_){ // condição if para verificar se a senha está certa
                alert("Entrou!")
                console.log(user[c1].nome_);
                console.log(user[c1].data_);
                console.log(user[c1].email_);
                console.log(user[c1].telefone_);
                console.log(user[c1].loginnew_);
                console.log(user[c1].senha_);
                console.log(user[c1].type_);
                cont = 1;
                cont1 = 0;
            }else if(pass != user[c1].senha_){ 
                alert("Senha errada!");
                cont = 1;
            }
        }else{
            c1++;
            if(user[c1] == undefined){
                alert("Email errado!");
                cont = 1;
            }
        }
    }
}

//função chamada quando o usario clica no botão
function cadUser(){
    id = id+1;
    
    nome = document.getElementById("nome").value;
    data = document.getElementById("data").value;
    email = document.getElementById("email").value;
    telefone = document.getElementById("tel").value;
    loginnew = document.getElementById("loginnew").value;
    senha = document.getElementById("senha").value;
    type = document.getElementById("tipo").value;
 
    //if para controlar a quantidade de contas criadas
    if(nome=="" || data=="" || email=="" || telefone=="" ||login=="" || senha=="" || type == "type"){
        alert("Erro ao cadastrar. Verifique se os campos foram preenchidos corretamente.")
    }
    else{
        user[c] = new usuario(id, nome, data, email, telefone, loginnew, senha, type); //armazendo os dados no vetor
        console.log(user[c]); //console.log para mostrar que está funcionando
        c = c+1;

        alert("Cadastro realizado com sucesso!!!");
        document.getElementById("form-signin").style.display = 'block';
        document.getElementById("form-cad").style.display = 'none';
        window.location.href = "index.html";
    }
}
        
        