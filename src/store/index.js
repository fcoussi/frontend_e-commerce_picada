import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios
)
export default new Vuex.Store({
  state: {
    categorias: [
      {
        nombre: 'Churrascos', listaProductos: [
          { nombre: 'Chacarero', descripcion: "Carne, Palta, Mayo, y Tomates Carne, Palta, Mayo, y Tomates Carne, Palta, Mayo, y Tomates", precio: '990', imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/eZA6Ms8fyFBupsRey-1200-1200.webp'},
          { nombre: 'Italiano', descripcion: "Carne, Palta, Tomate, Mayo", precio: '990', imagen: 'https://comidaschilenas.com/wp-content/uploads/2020/07/Receta-de-churrasco-italiano-chileno.jpg' },
          { nombre: 'Barro Luco', descripcion: "Queso, Carne", precio: '990', imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/A86NGQuskJYf2xTY3-1200-1200.webp' },
          { nombre: 'Americana', descripcion: 'Pepinillo, lechuga,cebolla planchada, tomate, mayonesa, carne', precio: "1990", imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/Le75Dk45CgRMmMYwq-1200-1200.webp' },
          { nombre: 'Chilena', descripcion: 'Carne, Tomate,Salsa americana, salsa verde, mayonesa', precio: "1990", imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/rymdCpt7X42rQMkzo-1200-1200.webp' },
          { nombre: 'Rodeo', descripcion: 'Carne, Queso, Salsa Barbecue', precio: "4990", imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/7gyutbX5qSqdBNurL-1200-1200.webp' },
        ],
      },
      {
        nombre: 'Bebidas', listaProductos: [
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://www.camelchile.cl/wp-content/uploads/2022/06/SPRITE_EXPRESS_237ML.png' },
          { nombre: 'Crush', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://www.camelchile.cl/wp-content/uploads/2022/06/CRUSH-EXPRESS_v1.png' },
          { nombre: 'Coca-Cola', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://images-na.ssl-images-amazon.com/images/I/31-wOAKdhrL._SX300_SY300_QL70_FMwebp_.jpg' },
          { nombre: 'Kem', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://www.camelchile.cl/wp-content/uploads/2022/06/KEM-EXPRESS.png' },
          { nombre: 'Pepsi', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://www.camelchile.cl/wp-content/uploads/2022/06/PEPSI-EXPRESS.png' },
          { nombre: 'Canada Dry', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://www.camelchile.cl/wp-content/uploads/2022/06/CANADA-DRY-EXPRESS.png' },
          { nombre: 'Bilz', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://www.camelchile.cl/wp-content/uploads/2022/06/BILZ-EXPRESS.png'},
          { nombre: 'Pap', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://www.camelchile.cl/wp-content/uploads/2022/06/PAP-EXPRESS.png' },
          { nombre: 'Lemon Soda', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://www.camelchile.cl/wp-content/uploads/2022/06/LIMON-SODA-EXPRESS_v1.png' },

        ]
      },
      {
        nombre: 'Completos', listaProductos: [
          { nombre: 'Italiano', descripcion: 'Vianesa, tomate, palta, mayonesa', precio: "990", imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/uvuC92ExzoZjqcB27-1200-1200.webp' },
          { nombre: 'Rodeo', descripcion: 'Vianesa, Queso, Salsa Barbecue', precio: "990", imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/kF7mYRgQbY8x9araa-1200-1200.webp' },
          { nombre: 'Alemana', descripcion: 'Vianesa, tomate, queso, pepinillos, mayonesa', precio: "990", imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/jwsovmMCtY7LuHLuA-1200-1200.webp' },
          { nombre: 'Marteca', descripcion: 'Vianesa, queso, jamón', precio: "990", imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/q5y3AoMvDgs4cQkPF-1200-1200.webp' },
        ]
      }
    ],
    carroCompras: { total: 0, listaProductos: [] },
    comida:[]

  },
  mutations: {
    agregarProductoAlCarro(state, producto) {
      state.carroCompras.listaProductos.push(producto)
      state.carroCompras.total += (producto.precio * producto.cantidad)
    },
    mostrarCategoria(state) {
      console.log("Ingresando al metodo mostrar")
      axios.get('consultar')
        .then((response) => {
          state.comida= response.data;
          console.log(state.comida[1].nombre)
        })
        .catch((e) => {
          console.log('NO SE PUEDE REALIZAR LA CONSULTA' + e);
        })
    }
  },

  /*
  Ocupamos actions cuando se desea realizar cambios Asíncrono
  */
  actions: {
  },
  modules: {
  }
})
