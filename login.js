
async function validarCredenciales(username, password) {
  try {
    const response = await fetch('usuarios.json');
    const usuarios = await response.json();

    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].username == username && usuarios[i].password == password) {
        sessionStorage.setItem("idUsuario", usuarios[i].idUsuario);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('Error', error);
    return false;
  }
}
  

let btnLogear = document.querySelector("#btnLogear");

if (btnLogear != null) {
    btnLogear.addEventListener("click", async (e) => {
        let username = document.querySelector("#email");
        let password = document.querySelector("#password");

        try {
            let credencialEsValida = await validarCredenciales(username.value, password.value);
            if (credencialEsValida) {
                window.location.href = 'index.html';
            } else {
                Toastify({

                  text: "Credenciales incorrectas",
                  gravity: 'top',
                  position:'left',
                  duration: 3000,
                  style:{
                    background: 'red'
                  },
                  offset:{
                    x:'35vw'
                  }
                  
                }).showToast();
            }
        } catch (error) {
            console.error('Error al validar credenciales:', error);
        }
    });
}


fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => {
    let h1Element = document.querySelector('.container-dolar h1');
    h1Element.textContent = `${data.moneda} ${data.nombre}: Compra ${data.compra} | Venta ${data.venta}`;
  })
  .catch(error => console.error('Error:', error));


