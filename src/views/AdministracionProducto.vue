<template>
  <b-container class="AdminProduct">
    <SideBar></SideBar>
    <b-row>
      <h1>Administración Producto</h1>
    </b-row>

    <form @submit.prevent="agregarProducto(producto)" >
      <h3 class="text-center">Agregar nuevo Producto</h3>
      <input
        type="text"
        placeholder="Ingresar Nombre"
        class="form-control my-2"
        v-model="nota.nombre"
      />
      <input
        type="text"
        placeholder="Ingresar Descripción"
        class="form-control my-2"
        v-model="nota.descripcion"
      />
      <input
        type="text"
        placeholder="Ingresar precio"
        class="form-control my-2"
        v-model="nota.precio"
      />
      <!--
      <input
        type="number"
        placeholder="Ingrese categoria"
        class="form-control my-2"
        v-model="nota.categoria"
      /> -->
        <b-form-group id="input-group-3"  label-for="input-3">
        <b-form-select
          aria-placeholder="Ingrese categoria"
          id="input-3"
          v-model="nota.categoria"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <input
        type="text"
        placeholder="Ingresar URL"
        class="form-control my-2"
        v-model="nota.imagen"
      />
      <b-button class="btn-sm btn-block btn-info" type="submit"
        ><font-awesome-icon icon="plus-square"/> Agregar </b-button
      >
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Imagen</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productos" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>
            <b-card-img
              :src="item.UrlImagen"
              class="mb-3 card-img-top"
              alt="imágen_del_producto"
              height="200"
            ></b-card-img>
          </td>
          <td>{{ item.Nombre }}</td>
          <td>{{ item.Descripcion }}</td>
          <td>{{ item.Precio }}</td>
          <td>
            <b-button
              class="btn-warning btn-sm mx-2"
              
              ><font-awesome-icon icon="edit"/> Actualizar</b-button
            >
            <b-button
              class="btn-danger btn-sm mx-2"
              @click="eliminarProducto(item.id, index)"
              ><font-awesome-icon icon="trash-alt"/> Eliminar</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </b-container>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  data() {
    return {
      productos: [],
      agregar: true,
      nota: {},
      agregar: true,
      foods: [{ text: 'Ingrese categoria', value:13,value:15,value:20 }, 'Churrasco', 'Completo', 'Papas fritas'],
       form:{
         food:null,
       } 
    };
  },
  created() {
    this.listarProductos();
  },
  computed: {
    //...mapState(["carroCompras"]),
  },
  methods: {
    listarProductos() {
      this.axios
        .get("consultarProducto")
        .then((response) => {
          this.productos = response.data;
        })
        .catch((e) => {
          console.log("No se puede acceder a tabla producto" + e);
        });
    },

    agregarProducto(item) {
      this.axios
        .post("agregarProducto", item)
        .then((res) => {})
        .catch((e) => {
          console.log(e.response);

          // Alerta de mensaje
          this.showAlert();
          this.mensaje.color = "danger";
          this.mensaje.texto = e.response;
        });
      this.notas = {};
    },
    eliminarProducto(id, index) {
      this.axios
        .post(`eliminarProducto/${id}`)
        .then((res) => {
          this.productos.splice(index, 1);

          this.showAlert();
          this.mensaje.texto = "Productos eliminados!";
          this.mensaje.color = "danger";
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
  components: { SideBar },
};
</script>
