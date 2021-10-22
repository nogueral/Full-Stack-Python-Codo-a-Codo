var ejemplo_computados = new Vue({
    el: '#ejemploC',
    data: {
      titulo: "Ejemplo computados",
      frutas: [
        // Objetos dentro del array frutas con el par clave-valor
        { nombre: "Naranja", cantidad: 10 },
        { nombre: "Banana", cantidad: 10 },
        { nombre: "Pera", cantidad: 5 }
      ],
      nuevaFruta: '',
      nuevaCantidad: 0,
      total: 0
    },
    methods: {
      agregarFrutaConIF() {
        if (this.nuevaFruta != "") {
          this.frutas.push({ nombre: this.nuevaFruta, cantidad: parseInt(this.nuevaCantidad) });
          this.nuevaFruta = '';
        }
      }
    },
    
    computed: {
      sumarFrutas() {//Muestra sumatoria total de cantidades de frutas.
        this.total = 0;
        for (fruta of this.frutas) {
          this.total += fruta.cantidad; //acumulador
        }
        return this.total;
      }
    }
  })