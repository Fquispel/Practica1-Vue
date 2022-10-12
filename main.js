var app = new Vue ({
    el:'#app',
    data:{
        configuracionPagina:{
            marca:"MegaDron",
            menuColor:"lightblue",
            footerColor:"slategrey",
            precioEstilos:"background: orangered; color:white; font-weight:bold",
            menus:[
                {
                  etiqueta:"Inicio",
                  url:"?"
                },
                {
                  etiqueta:"Tienda",
                  url:"?"
                }
            ]
          },

        producto:{
            id:1,
            imagen:"https://ae01.alicdn.com/kf/Sc3cc58f2a441419f970cc01f9e5358fbw/Dron-LU3-MAX-GPS-8K-HD-profesional-con-c-mara-Dual-card-n-autoestabilizador-Motor-sin.jpg_Q90.jpg_.webp",
            nombre: "Dron LU3 MAX GPS 8K HD",
            descripcion:`Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>,cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable`,
            precio:"620",
            colores:["red", "blue", "black", "yellow"]
        },
        // cont: 1,
        // deshabilitado: false,
        //
        // pedido:{
        //     id:null,
        //     cantidad:0,
        //     color:null
        // },

        productosRelacionados:[
            {
                id:2,
                imagen:"https://ae01.alicdn.com/kf/Hd59f72dd965d467dbbd499275a70b1d4z/Dron-plegable-KF102-con-Gps-8K-c-mara-Dual-HD-2-ejes-card-n-Motor-sin.jpg_Q90.jpg_.webp",
                nombre:"KF102",
                descripcion:"Dron plegable KF102 con Gps, 8K, cámara Dual HD, 2 ejes,cardán, Motor sin escobillas, fotografía aérea, 1200M de distancia, novedad de 2022",
                precio:"1180",
                colores:["orange", "blue"]
            },
            {
                id:3,
                imagen:"https://ae01.alicdn.com/kf/S947d9284b5ea4531a1bec599a09a1f49K/KBDFA-Dron-E888-RC-cuadric-ptero-profesional-FPV-4K-HD-fotograf-a-a-rea-evitaci-n.jpg_Q90.jpg_.webp",
                nombre:"KBDFA-Dron E888 RC",
                descripcion:"KBDFA-Dron E888 RC, cuadricóptero profesional FPV, 4K HD,fotografía aérea, evitación de obstáculos, helicóptero, juguetes de distancia",
                precio:"154",
                colores:["black", "midnightblue"]
            },
            {
                id:4,
                imagen:"https://ae01.alicdn.com/kf/S552326188797415ab6c729f850ab2639R/Dron-Profesional-4K-con-GPS-8K-c-mara-HD-3-ejes-card-n-antivibraci-n-evitaci.jpg_Q90.jpg_.webp",
                nombre:"Dron Profesional 4K con GPS",
                descripcion:"Dron Profesional 4K con GPS, 8K, cámara HD, 3 ejes, cardán antivibración, evitación de obstáculos, fotografía aérea, Quadcopter, nuevo",
                precio:"1800",
                colores:["teal", "blue", "slategrey", "navy"]
            }
        ],
        pedido: {
            id:null,
            cantidad: 1,
            color: null
        },
        cont: 1,
        color: '',
        habilitado: true,
        seleccionar: '',

    },
    methods:{
      incrementar: function () {
          this.cont += 1;
          if (this.color != '') {
              this.habilitado = false;
          }
      },
      restar: function () {
          this.habilitado = true;
          if ((this.cont - 1) <= 0) {
              this.cont = 0;
          } else {
              this.cont -= 1;
              if (this.color != '') {
                  this.habilitado = false;
              }
          }
      },
      seleccionarcolor: function (color) {
          this.color = color;
          this.seleccionar = color;
          if (this.cont > 0) {
              this.habilitado = false;
          }
          alert('Eligio el color: \n' + color);
      },
      comprar: function () {
          this.pedido.id = this.producto.id;
          this.pedido.cantidad = this.cont;
          this.pedido.color = this.color;
          alert(JSON.stringify(this.pedido));
      },
    },
})
