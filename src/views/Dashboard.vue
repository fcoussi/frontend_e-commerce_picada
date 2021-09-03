<template>
  <b-container class="Dashboard">
    <b-row>
      <h1>DASHBOARD ADMIN</h1>
    </b-row>
    <SideBar></SideBar>
    <div class="d-flex justify-content-center mb-5">
      <b-card-group deck>
        <b-card
          title="VENTAS"
          img-src="https://www.flaticon.es/svg/static/icons/svg/1069/1069102.svg "
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-2"
          img-height="100"
        >
          <b-card-text>Ventas realizadas en el día</b-card-text>
        </b-card>

        <b-card
          title="COSTOS"
          img-src="https://www.flaticon.es/svg/static/icons/svg/1420/1420341.svg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-2"
          img-height="100"
        >
          <b-card-text>Gastos internos del local</b-card-text>
        </b-card>

        <b-card
          title="GANANCIAS"
          img-src="https://www.flaticon.es/svg/static/icons/svg/888/888074.svg "
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-2"
          img-height="100"
        >
          <b-card-text>Ganancias en el día</b-card-text>
        </b-card>

        <b-card
          title="PERDIDAS"
          img-src="https://www.flaticon.es/svg/static/icons/svg/2863/2863361.svg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-2"
          img-height="100"
        >
          <b-card-text>Perdidas en el día</b-card-text>
        </b-card>
      </b-card-group>
    </div>

    <h2 class="d-flex justify-content-center mb-5">Listado Pedidos</h2>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Productos</th>
          <th scope="col">Comuna</th>
          <th scope="col">Nombre calle</th>
          <th scope="col">Número</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in notas" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.producto }}</td>
          <td>{{ item.comuna }}</td>
          <td>{{ item.calle }}</td>
          <td>{{ item.numero }}</td>
          <td>
            <b-button
              class="btn-warning btn-sm mx-2"
              @click="activarEdicion(item._id)"
              ><font-awesome-icon icon="edit"/>Actualizar</b-button
            >
            <b-button
              class="btn-danger btn-sm mx-2"
              @click="eliminarNota(item._id)"
              ><font-awesome-icon icon="trash-alt"/> Eliminar</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </b-container>
</template>

<script>
//import { mapState } from "vue";
import SideBar from "../components/SideBar";
export default {
  data() {
    return {
      notas: [],
    };
  },
  created() {
    this.listarNotas();
  },
  computed: {
    //...mapState(["carroCompras"]),
  },
  methods: {
    listarNotas() {
      this.axios
        .get("consultar")
        .then((response) => {
          console.log(response.data);
          this.notas = response.data;
          console.log(this.notas[0].calle);
        })
        .catch((e) => {
          console.log("No se pueden acceder a ventas" + e);
        });
    },
  },
  components: { SideBar },
};
</script>

<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
