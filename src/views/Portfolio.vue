<template>
  <v-card
    class="pa-md-4 mx-lg-auto"
    color="transparent"
    width="1550px"
    height="800px"
  >
    <v-row :align="align" style="height: 450px;">
      <v-col v-for="n in 5" :key="n">
        <v-card class="mx-auto" max-width="350">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            :aspect-ratio="12 / 9"
          >
          </v-img>
          <v-card-title>
            <div class="display-1 mb-2">
              Database Systems
            </div>
            <div class="title font-weight-regular grey--text">
              Project description
            </div>
          </v-card-title>
          <v-row class="px-4 grey--text" align="center">
            <v-avatar size="18" class="mr-4">
              <v-img
                src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                contain
              ></v-img>
            </v-avatar>

            <span>81° / 62°</span>
          </v-row>

          <v-divider class="mt-6 mx-4"></v-divider>

          <v-card-text>
            <v-chip class="mr-2" @click="github">
              <v-icon left>
                mdi-brightness-5
              </v-icon>
              github
            </v-chip>

            <v-chip @click="blinds">
              <v-icon left>
                mdi-blinds
              </v-icon>
              Demo
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  methods: {
    alarm() {
      alert("Turning on alarm...");
    },
    blinds() {
      alert("Toggling Blinds...");
    },
    lights() {
      alert("Toggling lights...");
    }
  }
};
</script>
