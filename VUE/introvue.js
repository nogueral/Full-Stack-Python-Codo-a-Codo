const app = new Vue({
    el:'#app',
    data: {
        mensaje: "Hola alumnos de Codo a Codo",
        nombre: "Leandro Noguera",
        img: "https://picsum.photos/200/300"
    }
})

const ejemplo = new Vue({
    el:'#ej1',
    data: {
        frutas:[
            {
                nombre:"naranja"
            },
            {
                nombre:"banana"
            },
            {
                nombre:"manzana"
            },
            {
                nombre:"pera"
            }
        ]
    }
})

const ejemplo2 = new Vue({
    el:'#ej2',
    data: {
        titulo: "Ejemplo v-if y v-for",
        frutas:[
            {
                nombre:"naranja", cantidad: 10
            },
            {
                nombre:"banana", cantidad: 0
            },
            {
                nombre:"manzana", cantidad: 5
            },
            {
                nombre:"pera", cantidad: 4
            },
            {
                nombre:"kiwi", cantidad: 12
            },
            {
                nombre:"anana", cantidad: 8
            }
        ]
    }
})


var ejemplo_Vmodel = new Vue({
    el: "#ej_vmodel",
    data: {
        mensaje: "Hola con VModel"
    }
})

var ejemplo_Von = new Vue({
    el: "#ej_von",
    data: {
        contador: 0
    }
})

const agregarElementos = new Vue({
    el:'#agregar',
    data: {
        frutas:[
            {
                nombre:"naranja", cantidad: 10
            },
            {
                nombre:"banana", cantidad: 0
            },
            {
                nombre:"manzana", cantidad: 5
            },
            {
                nombre:"pera", cantidad: 4
            },
            {
                nombre:"kiwi", cantidad: 12
            },
            {
                nombre:"anana", cantidad: 8
            }
        ],
        nuevaFruta: ""
    },
    methods:{
        agregarFruta(){
            this.frutas.push({nombre: this.nuevaFruta, cantidad: 0})
            this.nuevaFruta = "";
        },
        agregarFrutaConIf(){

            if(this.nuevaFruta != "")
            {
                this.frutas.push({nombre: this.nuevaFruta, cantidad: 0})
                this.nuevaFruta = ""; 
            } else {
                alert("Caja de texto vacia");
            }

        }
    }
})