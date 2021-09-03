<template>
  <div>
    <b-container fluid>
      <b-row>
        <!--Vista de productos-->
        <b-col cols="9">
          <div class="h3">Productos en Carro</div>
          <div id="listgroup-ex" style="position:relative;">
            <b-card-group deck id="vista-productos">
              <b-card
                id="card-producto"
                v-for="(producto, index) in carroCompras.listaProductos"
                :key="index"
              >
                <b-card-img
                  :src="producto.imagen"
                  class="mb-3 card-img-top"
                  alt="imágen_del_producto"
                  height="200"
                ></b-card-img>
                <b-card-text class="h5">{{producto.nombre}}</b-card-text>
                <b-card-text>$ {{producto.precio}}</b-card-text>
                <b-container fluid>
                  <b-row>
                    <b-col>
                      <div>Cantidad:</div>
                    </b-col>
                    <b-col>
                      <b-form-input v-model="producto.cantidad" type="number" min="1"></b-form-input>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-card-group>
          </div>
        </b-col>
        <!--Vista de confirmación de compra-->
        <b-col cols="3" v-if="carroCompras.total>0">
          <div class="h4">Resumen de compra</div>
          <div class="h5">Total: $ {{carroCompras.total}}</div>
          <b-button variant="success">Confirmar Compra</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["carroCompras"]),
  },
  methods: {},
};
</script>

<style scoped>
#card-producto {
  max-width: 8cm;
  min-width: 8cm;
  min-height: 10cm;
  max-height: 12cm;
}
</style>