
var usuarios = [
    { idUsuario: 1, username: 'jean', password: '123' },
    { idUsuario: 2, username: 'pablito', password: '321' },
    { idUsuario: 3, username: 'rulo19', password: '123456' }
  ];


  function validarCredenciales(username, password) {

    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].username == username && usuarios[i].password == password) {
        sessionStorage.setItem("idUsuario", usuarios[i].idUsuario);
        return true; 
      }
    }
    return false;
  }
  

let btnLogear = document.querySelector("#btnLogear")

if (btnLogear != null) {
    btnLogear.addEventListener("click", (e) => {

      let  username = document.querySelector("#email");
      let  password = document.querySelector("#password");
      
      if (validarCredenciales(username.value, password.value)) {      
        window.location  = 'index.html'
      }else{
          alert("Credenciales incorrectas")
      }

  });

}

