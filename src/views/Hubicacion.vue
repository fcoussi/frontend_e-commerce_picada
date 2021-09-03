
<template>
  <div>
    <h2 class="d-flex justify-content-center">
      <b>Encuéntranos</b>
    </h2>
    <div>
      <b-card-group deck>
        <b-row>
          <b-col cols="9">
            <b-card border-variant="white">
              <google-map />
            </b-card>
          </b-col>
          <b-col cols="3">
            <b-card
              title="HORARIO DE ATENCIÓN"
              img-src="https://cdn.pixabay.com/photo/2016/07/31/20/54/calendar-1559935_960_720.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
              border-variant="white"
            >
              <b-card-text>
                Lunes a Viernes 12:00 - 21:30
                <br />Sábado 18:00 - 21:30
                <br />Domingo - - - - - - --
              </b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-card-group>
    </div>
  </div>
</template>
<script>
import GoogleMap from "../components/GoogleMap.vue";

export default {
  components: {
    GoogleMap,
  },
};
</script>