
class Tarea {
    static contadorId = 1;

    constructor(idUsuario, nombre, descripcion) {
      this.id =  Tarea.contadorId++;
      this.idUsuario = idUsuario;
      this.nombre = nombre;
      this.descripcion = descripcion;
    }
}


