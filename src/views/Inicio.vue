<template>
  <b-container fluid="xl">
    <div class="mb-4">
      <Carousel />

      <div class="d-flex justify-content-center mb-5">
        <b-card-group deck>
          <b-row class="group-tarjet d-flex justify-content-center">
            <b-col class="columna" sm="7" md="5" lg="3" xl="5">
              <b-card
                title="1.Elige tu comida"
                img-src="https://cdn-icons-png.flaticon.com/128/851/851554.png"
                img-alt="Image"
                img-top
                tag="article"
                class="tarjet"
                img-height="100"
              >
                <b-card-text
                  >Escoge nuestros productos en nuestra tienda
                  virtual</b-card-text
                >
              </b-card>
            </b-col>
            <b-col class="columna" sm="7" md="5" lg="3" xl="5">
              <b-card
                title="2. Haz tu pedido"
                img-src="https://cdn-icons-png.flaticon.com/128/1792/1792671.png"
                img-alt="Image"
                img-top
                tag="article"
                class="tarjet"
                img-height="100"
              >
                <b-card-text
                  >Es fácil y rápido. Puedes pagar online o en la
                  entrega</b-card-text
                >
              </b-card>
            </b-col>
            <b-col class="columna" sm="7" md="5" lg="3" xl="5">
              <b-card
                title="3. Recibe tu comida"
                img-src="https://cdn-icons-png.flaticon.com/128/4589/4589756.png"
                img-alt="Image"
                img-top
                tag="article"
                class="tarjet"
                img-height="100"
              >
                <b-card-text>Reparto a domicilio sólo en Temuco</b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-card-group>
      </div>
    </div>

    <div>
      <Footer />
    </div>
  </b-container>
</template>

<script>
import Carousel from "../components/carousel.vue";
import Footer from "../components/footer.vue";

export default {
  components: { Carousel, Footer },
};
</script>

<style>
.termino {
  background: #080808;
}

.tarjet {
  margin-block: 10px;
  /* background: #b9273a; */
  padding-left: 20px;
  padding-right: 20px;
}

.group-tarjet {
  /* background: #080808; */
  padding: 20px;
}

.main-header {
  position: relative;
  background: url(../assets/tablero.jpg);
  background-size: cover;
}
</style>
