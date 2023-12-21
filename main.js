//Lista de tareas 

let agregarNuevatarea = true;
let listaDeTareas = new ListaDeTareas();
let opcionSeleccionada

while (agregarNuevatarea) {

    opcionSeleccionada = prompt("Ingrese que acción desea realizar \n1.- Agregar\n2.- Eliminar\n3.- Listar")

    if (opcionSeleccionada != null) {
        accionARealizar(opcionSeleccionada.toLowerCase().trim())
    }

    agregarNuevatarea =  confirm("Desea volver a operar?");
    
}


function accionARealizar(opcionSeleccionada) {

    if (opcionSeleccionada === "1" || opcionSeleccionada === "2" || opcionSeleccionada === "3") {
        
        opcionSeleccionada = Number(opcionSeleccionada)
        switch (opcionSeleccionada) {
            case 1:
                let nombreDeTarea = prompt("Agregue el nombre de la tarea").toLowerCase().trim()
                let descripcionTarea = prompt("Agregue la descripcion de la tarea").toLowerCase().trim()
    
                listaDeTareas.agregarTarea(new Tarea(nombreDeTarea, descripcionTarea))
    
                break;
            case 2:
                
                let idItem = prompt("Ingrese el id del item que desea eliminar").toLowerCase().trim()
                listaDeTareas.eliminadoLogicoTarea(idItem);
                
                break;
            case 3:
                listaDeTareas.listarTareas()
                    break;
            default:
                break;
        }

    }else{

        alert("La opción ingresada no es válida. Por favor, ingrese 1, 2 o 3.");
    }

}
