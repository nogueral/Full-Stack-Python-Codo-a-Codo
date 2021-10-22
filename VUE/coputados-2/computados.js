var ejemplo_computados_tres = new Vue({
    el: '#ejemploCTres',
    data: {
      titulo: "Ejemplo computados 3",
      frutas: [
        // Objetos dentro del array frutas con el par clave-valor
        { nombre: "Naranja", cantidad: 10 },
        { nombre: "Banana", cantidad: 12 },
        { nombre: "Pera", cantidad: 5 }
      ],
      nuevaFruta: '',
      total: 0
    },
    methods: {
      agregarFrutaConIF() {
        if (this.nuevaFruta != "") {
          this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0 });
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