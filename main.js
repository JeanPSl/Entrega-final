
let listaDeTareas = new ListaDeTareas();

tieneListadoUserLogeado()

function tieneListadoUserLogeado() {
    if (sessionStorage.getItem("tarea") != null) {
        
        let listadoTareasStorage = JSON.parse(sessionStorage.getItem("tarea"))

        listadoTareasStorage.forEach(e => {
            
            listaDeTareas.agregarTarea(new Tarea( e.idUsuario, e.nombre, e.descripcion))
        });

        listaDeTareas.listarTareas()
    }
      
}


let btnAgregar = document.querySelector("#btnAgregar")
let btnEliminar = document.querySelector("#btnEliminar")

btnAgregar.addEventListener("click", (e) => {

    const inputAgregar = document.querySelector("#formAgregar");

    const inputIdEliminar = document.querySelector("#idTarea");
    inputIdEliminar.style.display = "none"

    if (inputAgregar.style.display =='none') {
        return inputAgregar.style.display =  "block" 
    }
    
    let nombreTarea = document.querySelector("#nombreTarea").value
    let descripcionTarea = document.querySelector("#descripcionTarea").value

    if (nombreTarea == "") {
        return Toastify({

            text: "Tiene que ingresar un nombre",
            gravity: 'top',
            position:'left',
            duration: 3000,
            offset:{
              x:'35vw'
            }
            
          }).showToast();
    }if (descripcionTarea == "") {
        return Toastify({

            text: "Tiene que ingresar una descripcion",
            gravity: 'top',
            position:'left',
            duration: 3000,
            offset:{
              x:'35vw'
            }
            
          }).showToast();
    }

    listaDeTareas.agregarTarea(new Tarea( Number(sessionStorage.getItem('idUsuario')), nombreTarea, descripcionTarea))

    listaDeTareas.listarTareas()
});

btnEliminar.addEventListener("click", (e)=> {

    const inputAgregar = document.querySelector("#formAgregar");
    inputAgregar.style.display = "none"

    const inputIdEliminar = document.querySelector("#idTarea");
    
    if (inputIdEliminar.style.display == "none") {
        return inputIdEliminar.style.display = "block"
    }
    
    let valueEliminar = document.querySelector("#idTareaValue");
    

    listaDeTareas.eliminadoLogicoTarea(valueEliminar.valueAsNumber);

    if (listaDeTareas.tareas.length >= 0) {
        listaDeTareas.listarTareas()
    }
    
});

var btnDeslogear = document.querySelector("#deslogear")

btnDeslogear.addEventListener("click", (e) => {
    window.location  = 'login.html'
});

