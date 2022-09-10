<template>
  <div>
    <Navbar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({}),
};
</script>
