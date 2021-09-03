<template>
<b-container>
  
        <h4>ADMIN</h4>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Correo electrónico:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Ingresar correo"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Ingresar contraseña"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Ingresar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
</b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        checked: [],
      },

      show: true,
    };
  },
  methods: {
    onSubmit(evt) {

      console.log("User: "+this.form.email);
      console.log("contraseña: "+this.form.password);
      /*
      evt.preventDefault();
      alert(JSON.stringify(this.form)); */
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};

</script>