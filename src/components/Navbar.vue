
<template>
  <b-navbar class="navbar mb-4" type="dark" toggleable="lg" sticky>
    <b-navbar-brand href="/">LaPicaZanhueza</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse class="nav-item" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'inicio'}" exact>Inicio</b-nav-item>
        <b-nav-item :to="{name: 'menu'}" exact>Menu</b-nav-item>
        <b-nav-item :to="{name: 'hubicacion'}" exact>Hubicacion</b-nav-item>
        <b-nav-item :to="{name: 'nosotros'}" exact>Nosotros</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item :to="{name: 'admin'}" exact>Admin</b-nav-item>
        </b-navbar-nav>


        <b-button :to="{name: 'carroCompras'}" class="btn btn-success btn-lg">
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