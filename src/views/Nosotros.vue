<template>
  <b-container fluid="xl">
    <h3 class="d-flex justify-content-center">
      <b>VISITA NUESTRO LOCAL</b>
    </h3>

    <div class="d-flex justify-content-center mb-5">
      <b-card-group deck>
        <b-card
          title="Grato Ambiente"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHu7a4RLFqb8LePsdyXgK1-KuSDqKB7QngJQ&usqp=CAU"
          img-alt="Image"
          img-height="250"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text
            >Se dispone de amplias mesas en el local para disfrutar en
            compañia</b-card-text
          >
        </b-card>

        <b-card
          title="Taca - Taca"
          img-src="https://http2.mlstatic.com/D_NQ_NP_840951-MLC50595988322_072022-O.webp"
          img-alt="Image"
          img-height="250"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text
            >Disponemos de un taca taca para que la espera no sea tan aburrida,
            mientras creamos los sabores</b-card-text
          >
        </b-card>
      </b-card-group>
    </div>

    <div class="d-flex justify-content-center mb-5">
      <b-card-group deck>
        <b-card
          title="Máquinas de Juego"
          img-src="data:image/jpeg;base64,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"
          img-alt="Image"
          img-height="250"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text
            >Máquinas con amplia variedad de video juegos disponibles para
            nuestros clientes</b-card-text
          >
        </b-card>

        <b-card
          title="Nuestra cocina"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnabOxkJki_nq3eWYhdTk1OY6AF2l7lYySS7XXqAOxfpWZ7Dma0nt5zOX6WvmQBvqykY&usqp=CAUs"
          img-alt="Image"
          img-height="250"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text
            >En nuestro local disponemos con los implementos de trabajo
            adecuados para cumplir tus pedidos</b-card-text
          >
        </b-card>
      </b-card-group>
    </div>

    <div>
      <Footer />
    </div>
  </b-container>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  components: { Footer },
};
</script>
