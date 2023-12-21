
class Tarea {
    static contadorId = 1;

    constructor(nombre, descripcion) {
      this.id =  Tarea.contadorId++;
      this.nombre = nombre;
      this.descripcion = descripcion;
    }
}
