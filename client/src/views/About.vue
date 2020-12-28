<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider> </v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        I'm a senior Computer Science student at Montana State University.
        Seeking to use my programming and problem solving skills on Entry level
        or internship
      </v-responsive>
      <v-avatar class="elevation-12 mb-12" size="128">
        <v-img src="@/assets/image3.jpeg"></v-img>
      </v-avatar>
      <div></div>

      <v-btn color="grey" href="https://vuetifyjs.com" outlined large>
        <span class="grey--text.text--darken-1.font-weight-bold">
          Vuetify Documentation
        </span>
      </v-btn>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "Contact"
};
</script>
