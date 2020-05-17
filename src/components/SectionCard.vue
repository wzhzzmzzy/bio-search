<template>
  <v-row
    justify="center"
  >
    <v-col
      xl="8"
      lg="10"
      md="11"
    >
      <v-card>
        <v-card-subtitle>
          {{ title }}
        </v-card-subtitle>
        <v-card-text>
          <v-row
            justify="start"
            align="center"
          >
            <template v-for="link in links">
              <v-col
                :key="link.alt"
                @click="recordSearch(link)"
                md="2"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <a :href="link.query(searchText)" target="_blank" v-on="on">
                      <img class="img-btn" :src="require(`../assets/${link.src}`)" :alt="link.alt">
                    </a>
                  </template>
                  <span>{{ link.alt }}</span>
                </v-tooltip>
              </v-col>
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SectionCard',
  props: ['title', 'links'],
  computed: {
    ...mapState(['searchText'])
  },
  methods: {
    recordSearch (link) {
      this.$store.commit('ADD_SEARCH_HISTORY', {
        target: link.alt
      })
    }
  }
}
</script>

<style>
.img-btn {
  max-height: 100px;
  max-width: 150px;
}
</style>
