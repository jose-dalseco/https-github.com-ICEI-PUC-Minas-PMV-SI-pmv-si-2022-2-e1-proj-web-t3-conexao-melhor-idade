//  const email = document.getElementById('email')
//  const password = document.getElementById('password')

//  const passLabel = document.getElementById('passLabel')
//  const emaiLabel = document.getElementById('emaiLabel')

//  const msgError = document.getElementById('msgError')

//  const users = JSON.parse(localStorage.getItem('data'))

//  const foundUser = users.find(function(user){
//   return user.email === email.value;
//  })

//  if (!foundUser || foundUser.password !== password.value) {
//   return alert("Email ou senha invalido.");
// }

// localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

// return window.location.replace("src/index.html");
// }

// document.addEventListener("DOMContentLoaded", function (event) {
//   document
//       .getElementById("cmi-login")
//       .addEventListener("click", logIn);
// })
const form = document.querySelector("#cmi-login-form");
form.addEventListener("submit", function entrar(event) {
  console.log("event", event);
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password1");

  const users = JSON.parse(localStorage.getItem("users"));

  const loggedUser = users.find((item) => {
    return email.value === item.email && password.value === item.password1;
  });

  if (loggedUser) {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    window.location.href = "perfil.html?id=" + loggedUser.id;
  } else {
    alert("Email ou senha invalido.");
  }
});
// function entrar(event) {
//   console.log('event', event)
//   event.preventDefault()
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");

//   const passLabel = document.getElementById("passLabel");
//   const emaiLabel = document.getElementById("emaiLabel");

//   const msgError = document.getElementById("msgError");

//   const users = JSON.parse(localStorage.getItem('data'))

//    const loggedUser = users.data.find((item) => {
//   return email.value === item.email && password.value === item.password

//   });
//   if(loggedUser){
//     localStorage.setItem('loggedUser',JSON.stringify(loggedUser))

//     window.location.assign('index.html')
//   }

//   }

//   const foundUser = users.find(function(user) {
//     return user.email === email.value;
//   })

//   // Se usu??rio foi encontrado e o password ?? igual
//   if (!foundUser || foundUser.password !== password.value) {
//     return alert("Email ou senha invalido.");
//   }

//   // Salva o usu??rio como logado no local storage
//   localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

//   // Redireciona para a home
//   return window.location.replace("src/index.html");
// }
