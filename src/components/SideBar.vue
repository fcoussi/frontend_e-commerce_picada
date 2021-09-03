<template>
  <div>
    <b-button variant="primary" v-b-toggle.sidebar-no-header
      ><font-awesome-icon icon="bars" /> Menú</b-button
    >
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">ADMIN</h4>

          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item :to="{ name: 'Dashboard' }" exact
                ><font-awesome-icon icon="user-cog" /> Dashboard</b-nav-item
              >
              <b-nav-item :to="{ name: 'AdministracionProducto' }" exact
                ><font-awesome-icon icon="hamburger" /> Productos</b-nav-item
              >
            </b-nav>
          </nav>
          <b-button variant="warning" block @click="hide">Cerrar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
