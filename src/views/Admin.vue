
<template>
  <div class="login">
    <!--Formulario -->
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="6">
          <h2 class="title">LOGIN ADMIN</h2>
          <b-form class="form" @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group class="form-label" id="input-group-1" label="User:" label-for="input-1">
              <b-form-input
                class="form-input"
                id="input-1"
                v-model="form.user"
                type="text"
                required
                placeholder="Enter User"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="form-label"
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                class="form-input"
                id="input-2"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter Password"
              ></b-form-input>
            </b-form-group>

            <b-button class="form-submit mr-4" type="submit" variant="primary">Submit</b-button>
            <!--<b-button type="reset" class="mr-4" variant="danger">Reset</b-button> -->
            <h6 class="text-danger mt-4" v-if="con">CONTRASEÑA USUARIO INVÁLIDO</h6>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        user: "",
        password: "",
      },
      show: true,
      con: false,
    };
  },
  methods: {
    /*Método que valida usuario y contraseña para ingresar a Dashboard */
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.user == "admin" && this.form.password == "123456") {
        this.$router.push("/Dashboard");
      } else {
        this.con = true;
      }
    },
    /*Método que permite resetear los valores desde formulario */
    onReset(evt) {
      evt.preventDefault();
      this.form.user = "";
      this.form.password = "";
      this.con = false;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 450px;
  max-width: 100%;
  background: rgba(34, 53, 68, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  &:hover {
    background: #0b9185;
  }
}
</style>










