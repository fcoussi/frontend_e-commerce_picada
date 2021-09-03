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
          { nombre: 'Chacarero', descripcion: "Carne, Palta, Mayo, y Tomates Carne, Palta, Mayo, y Tomates Carne, Palta, Mayo, y Tomates", precio: '990', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Chacarero', descripcion: "", precio: '990', imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg' },
          { nombre: 'Chacarero', descripcion: "", precio: '990', imagen: 'https://cdn-va.niceshops.com/upload/image/banner/medium/default/17840.jpg' },
          { nombre: 'Chacarero', descripcion: "", precio: '990', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Carne-Tomate-Mayo', descripcion: '', precio: "1990", imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Carne-Tomate-Mayo', descripcion: '', precio: "1990", imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Carne-Tomate-Mayo', descripcion: '', precio: "1990", imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
        ],
      },
      {
        nombre: 'Bebidas', listaProductos: [
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
          { nombre: 'Sprite', descripcion: 'Bebida express 237cc', precio: '400', imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },

        ]
      },
      {
        nombre: 'Completos', listaProductos: [
          { nombre: 'Completo italiano', descripcion: '', precio: "990", imagen: 'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118471135_199701248239967_1444182154097321680_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Pn1Cjyv5-hwAX9a66ft&oh=c7895e79e4b6f5be7f5904cff721668f&oe=5F76436E' },
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
