<template>
  <v-container>
    <v-flex mt-10>
      <v-layout>
        <v-flex>
          <template v-for="(app, i) in apps">
            <v-card flat color="transparent" :key="i">
              <v-card-title>
                <v-layout>
                  <v-flex mt-10>
                    <v-card
                      style="border-raduis:20px"
                      color="blue"
                      width="150px"
                      height="150px"
                    >
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card-title>
              <v-card-text>{{ description }}</v-card-text>
              <div class="title mt-2">technologies used</div>
              <template v-for="(tech, i) in app.technologies">
                <v-btn icon :key="i">
                  <v-icon>{{ tech.icon }}</v-icon>
                </v-btn>
              </template>
              <div class="title mt-2">Code</div>
              <div>{{ app.code }}</div>
            </v-card>
          </template>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Portfolio",
  components: {
    //hellworld
  },

  data() {
    return {
      description: "Database systems projects",
      apps: [
        {
          name: "Database System"
        }
      ],
      technologies: [
        {
          name: "Spring Java",
          icon: "mdi-java",
          link: ""
        },
        {
          name: "sqlite3",
          icon: "fa-data",
          link: ""
        },
        {
          name: "redis",
          icon: "",
          link: ""
        }
      ],
      code: {
        name: "github"
      }
    };
  }
};
</script>

<style scoped></style>
