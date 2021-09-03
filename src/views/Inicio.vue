<template>
  <b-container fluid="xl">
    <div class="mb-4">
      <carousel />
    </div>

    <div class="d-flex justify-content-center mb-5">
      <b-card-group deck>
        <b-card
          title="1.Elige tu comida"
          img-src="https://image.flaticon.com/icons/svg/857/857681.svg "
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-2"
          img-height="100"
        >
          <b-card-text>Escoge nuestros productos en nuestra tienda virtual</b-card-text>
        </b-card>

        <b-card
          title="2. Haz tu pedido"
          img-src="https://image.flaticon.com/icons/svg/888/888140.svg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-2"
          img-height="100"
        >
          <b-card-text>Es fácil y rápido. Puedes pagar online o en la entrega</b-card-text>
        </b-card>

        <b-card
          title="3. Recibe tu comida"
          img-src="https://image.flaticon.com/icons/svg/3105/3105008.svg "
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-2"
          img-height="100"
        >
          <b-card-text>Reparto a domicilio sólo en Temuco</b-card-text>
        </b-card>
      </b-card-group>
    </div>

    <div class="mt-4 mb-2">
      <b-row class="text-center">
        <b-col cols="4" class="text-light bg-danger">
          <h4>Fono de Reparto: 2344787</h4>
        </b-col>
        <b-col cols="3" class="bg-danger"></b-col>
        <b-col cols="5" class="text-light bg-danger">
          <h6>
            <b>Encuentranos en:</b>
          </h6>
          <div>
            <b-link
              href="https://www.facebook.com/pages/category/Sandwich-Shop/La-pica-del-zanhueza-384958958282352/"
            >
              <img
                class="social_networksA"
                width="40"
                height="40"
                src="https://image.flaticon.com/icons/svg/1051/1051309.svg"
                alt
              />
            </b-link>
            <b-link href="https://www.instagram.com/picadelzanhueza/">
              <img
                class="social_networksA"
                width="40"
                height="40"
                src="https://image.flaticon.com/icons/svg/1400/1400829.svg"
                alt
              />
            </b-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>


<script>
import Carousel from "../components/carousel.vue";
import Formulario from "../components/Formulario.vue";
export default {
  components: { Carousel, Formulario },
};
</script>

<style>
.footer {
  background: #b9273a; /*Color de fondo*/
}

.termino {
  background: #080808;
}

.main-header {
  position: relative;
  background: url(../assets/tablero.jpg);
  background-size: cover;
}
</style>