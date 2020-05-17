<template>
  <v-row
    justify="center"
  >
    <v-col
      cols="2"
    >
      <v-chip
        class="ma-2"
        color="indigo"
        text-color="white"
        @click="handleOpenRepo"
      >
        Github Repo
        <v-icon right>link</v-icon>
      </v-chip>
    </v-col>
    <v-col
      cols="2"
    >
      <v-chip
        class="ma-2"
        color="green"
        text-color="white"
        @click="handleEmail"
      >
        Email Me
        <v-icon right>mail</v-icon>
      </v-chip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'About',
  methods: {
    handleOpenRepo () {
      window.open('https://github.com/wzhzzmzzy/bio-search', '_blank')
    },
    handleEmail () {
      window.open('mailto:wzhzzmzzy@gmail.com')
    }
  }
}
</script>
