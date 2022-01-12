<template>
  <v-app dark>
    
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="clickDrawer" />
      <v-toolbar-title v-text="title" />
      <v-btn>Espèce</v-btn>
      <v-btn>Département</v-btn>
      <v-btn>Récolteur</v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; AntArea - 2022</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    especes () {
      return this.$store.state.liste_especes.list
    },
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AntArea'
    }
  },
  methods: {
    clickDrawer(evt) {
      this.$store.commit("commun/changeDrawerStatus");
    }
  }
}
</script>
