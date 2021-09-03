
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <b-card
            overlay
            bg-variant="First slide"
            img-src="https://image.freepik.com/foto-gratis/concepto-material-pared-fondo-madera-rasgunado-pared_53876-30226.jpg"
            img-width="1024"
            img-height="380"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-row>
              <b-col>
                <b-card-text cols="6">
                  <br>
                  <br>
                  <H2 class="d-flex justify-content-center">
                    <b>PROMOCIÓN DE ESTA SEMANA</b>
                  </H2>
                  <br>
                  <p><h3 class="d-flex justify-content-center">Churrasco de vacuno 2X$6.000</h3></p>
                </b-card-text>
              </b-col>
              <b-col cols="1"></b-col>
              <b-col cols="5">
                <b-img
                  src="http://www.carritosparaeventos.cl/images/churrasco-italiano-2014.png "
                  fluid
                  alt="Responsive image"
                  width="500"
                ></b-img>
              </b-col>
            </b-row>
          </b-card>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <b-card
            overlay
            bg-variant="secondary"
            img-src="https://image.freepik.com/foto-gratis/concepto-material-pared-fondo-madera-rasgunado-pared_53876-30226.jpg"
            img-width="1024"
            img-height="380"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-row>
              <b-col>
                <b-card-text cols="6">
                  <br>
                  <br>
                  <H2 class="d-flex justify-content-center">
                    <b>PROMOCIÓN DE ESTA SEMANA</b>
                  </H2>
                  <br>
                  <h3 class="d-flex justify-content-center">
                    Ave Lomo 2X$5.000</h3>
                </b-card-text>
              </b-col>
              <b-col cols="1"></b-col>
              <b-col cols="5">
                <b-img
                  src="https://www.enmicocinahoy.cl/wp-content/uploads/2014/11/lomito-casero-sandwich-2.jpg"
                  fluid
                  alt="Responsive image"
                  width="500"
                ></b-img>
              </b-col>
            </b-row>
          </b-card>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <b-card
            overlay
            bg-variant="secondary"
            img-src="http://granitoycuarzo.mx/wp-content/uploads/2019/04/plomo-01-600x240.jpg "
            img-width="1024"
            img-height="380"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-row>
              <b-col cols="1">
              </b-col> 
              <b-col cols="4">
                <b-img
                  src="https://instagram.fscl13-2.fna.fbcdn.net/v/t51.2885-15/e35/66348731_1319538621526920_4735576669282712364_n.jpg?_nc_ht=instagram.fscl13-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=NDhStKZpoiUAX8CHsw_&oh=836c3d6a9b9884bd34335b3e3eff1a63&oe=5F7C80E5"
                  fluid
                  alt="Responsive image"
                  width="600"
                ></b-img>
              </b-col>
              <b-col>
                <b-card-text cols="6">
                  <H2 class="d-flex justify-content-center">
                    <b>APROVECHA !!</b>
                  </H2>
                  <p>En la picada poseemos convenios con la tarjeta sodexo junaeb que esperas para hacer tu pedido</p>
                </b-card-text>
              </b-col>
              <b-col cols="1"></b-col>
            </b-row>
          </b-card>
        </template>
      </b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}
      <br />
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>




