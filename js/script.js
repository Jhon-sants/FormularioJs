const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  //Verifica se o nome está vazio
  if(nameInput.value === ""){
    alert("Por favor, preencha o seu nome");
    return;
  }

  //Verifica se o e-mail está preenchido e se é válido
  if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor, preencha o seu email");
    return;
  }

  //Verificar se a senha está preenchida
  if(!validatePassword(passwordInput.value, 8)){
    alert("A senha precisa ter no mínimo 8 dígitos.")
    return;
  }

  //Verificar se a situação foi selecionada
  if(jobSelect.value === ""){
    alert("Por favor, selecione a sua situação.")
    return;
  }

  //Verifica se a mensagem está preenchida
  if(messageTextarea.value === ""){
    alert("Escreva uma mensagem.")
    return;
  }

  //Se todos os campos estiverem corretamente preenchidos, envie o formulário
  form.submit();
})

//Função que valida e-mail
function isEmailValid(email){
  const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(email)){
    return true;
  }

  return false;
}

//Função que valida a senha
function validatePassword(password, minDigits){
  if(password.length >= minDigits){
    //Senha válida
    return true;
  }

  //Senha inválida  
  return false;
}