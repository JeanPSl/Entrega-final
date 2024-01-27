
class ListaDeTareas {

    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea) {
      this.tareas.push(tarea)
    }
    
    eliminadoLogicoTarea(idItem) {
      
        if (this.tareas.length == 0 ) return alert("No tiene items para eliminar")

        let itemAEliminar =  this.tareas.find(tarea => tarea.id == idItem && tarea.idUsuario == Number(sessionStorage.getItem('idUsuario')))

        if (itemAEliminar == undefined){

          return Toastify({

            text: "ID no existe",
            gravity: 'top',
            position:'left',
            duration: 3000,
            offset:{
              x:'35vw'
            }
            
          }).showToast();
        }

        itemAEliminar.id = Math.floor(Math.random() * -100) + 1;

        this.tareas = this.tareas.filter(tarea => tarea.id >= 0 );

        sessionStorage.setItem('tarea',JSON.stringify(this.tareas))
        
    }
    
    listarTareas() {

        let contenedorTareas = document.getElementById('contenedor-tareas');
        contenedorTareas.style.display = "block"
        contenedorTareas.innerHTML = '';
        
        let tareasFiltrada = this.tareas.filter(t => t.idUsuario == Number(sessionStorage.getItem('idUsuario')) )

        tareasFiltrada.forEach(tarea => {

          let tareaElemento = document.createElement('div');
          tareaElemento.innerHTML = `.- ${tarea.id} ${tarea.nombre}: ${tarea.descripcion}`;
          contenedorTareas.appendChild(tareaElemento);
        });

        sessionStorage.setItem('tarea',JSON.stringify(this.tareas))
    }
}



