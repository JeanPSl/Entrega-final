
class ListaDeTareas {

    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }
    
    eliminadoLogicoTarea(idItem) {

        if (this.tareas.length == 0 ) return alert("No tiene items para eliminar")

        let itemAEliminar = this.tareas.find(tarea => tarea.id == idItem);

        itemAEliminar.id = Math.floor(Math.random() * -100) + 1;

        this.tareas = this.tareas.filter(tarea => tarea.id >= 0 );
        
    }
    
    listarTareas() {
        
        if (this.tareas.length == 0 ) return alert("No tiene items para listar")

        this.tareas.forEach(tarea => {
          console.log(`.- ${tarea.id} ${tarea.nombre}: ${tarea.descripcion} `);
        });
    }
}



