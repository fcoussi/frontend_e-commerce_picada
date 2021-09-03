
<template>
  <div>
    <b-container fluid>
      <b-row>
        <!--Vista lateral-->
        <b-col cols="3">
          <h2>Productos</h2>
          <b-list-group v-b-scrollspy:listgroup-ex>
            <b-list-group-item
              v-for="(categoria, index) in categorias"
              :key="index"
              button
              @click="categoriaSeleccionada = categoria.nombre"
              >{{ categoria.nombre }}</b-list-group-item
            >
          </b-list-group>
        </b-col>

        <!--Vista de Productos-->
        <b-col cols="9">
          <div id="listgroup-ex" style="position: relative">
            <h2>{{ categoriaSeleccionada }}</h2>
            <!--Recorrer arreglo categorías-->
            <div v-for="(categoria, index) in categorias" :key="index">
              <div v-if="categoria.nombre === categoriaSeleccionada">
                <b-card-group deck>
                  <!--Recorrer lista de productos para la categoría seleccionada-->
                  <b-card
                    id="card-producto"
                    v-for="(producto, index) in categoria.listaProductos"
                    :key="index"
                  >
                    <b-card-img
                      :src="producto.imagen"
                      class="mb-3 card-img-top"
                      alt="imágen_del_producto"
                      height="200"
                    ></b-card-img>

                    <b-card-text class="h5">{{ producto.nombre }}</b-card-text>

                    <b-card-text id="texto-descripcion">{{
                      producto.descripcion
                    }}</b-card-text>

                    <b-card-text>$ {{ producto.precio }}</b-card-text>

                    <b-button
                      @click="agregarProducto(producto)"
                      variant="success"
                      >Agregar</b-button
                    >
                  </b-card>
                </b-card-group>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapState, mapMutations } from "vuex";
import CarroComprasVue from "./CarroCompras.vue";

export default {
  data() {
    return {
      categoriaSeleccionada: "Seleccione una Categoría...",
    };
  },
  components: {},
  computed: {
    ...mapState(["categorias"]),
  },
  methods: {
    ...mapMutations(["agregarProductoAlCarro","mostrarCategoria"]),

    agregarProducto(producto) {
      producto["cantidad"] = 1;
      this.agregarProductoAlCarro(producto.nombre);
    },
  },
};
</script>

<style scopeds>
#card-producto {
  max-width: 8cm;
  min-width: 8cm;
  min-height: 12cm;
  max-height: 12cm;
  margin-top: 0.5cm;
}

#texto-descripcion {
  height: 1.8cm;
}
</style>
