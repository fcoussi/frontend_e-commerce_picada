
<template>
  <b-navbar class="navbar mb-4" type="dark" toggleable="lg" sticky="true">
    <b-navbar-brand href="/">LaPicaZanhueza</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse class="nav-item" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'Inicio'}" exact>Inicio</b-nav-item>
        <b-nav-item :to="{name: 'Menu'}" exact>Comidas</b-nav-item>
        <b-nav-item :to="{name: 'Hubicacion'}" exact>Ubicación</b-nav-item>
        <b-nav-item :to="{name: 'Nosotros'}" exact>Nosotros</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <b-navbr-nav>
          <b-nav-item :to="{name: 'Admin'}" exact>ADMIN</b-nav-item>
        </b-navbr-nav>


        <b-button :to="{name: 'CarroCompras'}" class="btn btn-success btn-lg">
          <font-awesome-icon icon="cart-plus" />

          {{carroCompras.listaProductos.length}}

        </b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
};
</script>

<style>
.navbar {
  color: #fff;
  background: #050505;
}

.nav-item {
  color: rgb(255, 255, 255);
}
</style>