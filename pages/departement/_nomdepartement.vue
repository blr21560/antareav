<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          tag="a"
          style="min-height: 15px; padding: 6px 12px"
          v-for="dep in infos"
          :key="dep.url"
          :to="`/departement/${dep.url}`"
          nuxt
          router
          exact
        >
          <v-list-item-content style="padding: 0">
            <v-list-item-title v-text="`${dep.nom + ' (' + dep.dep+ ')'}`" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: "indexPageDepartement",
  middleware: ["liste_departements", "espece"],
  data() {
    return {
      panel: [0,1],
      nom_departement: this.$route.params.nomdepartement,
    };
  },
  computed: {
    infos: function () {
      this.esps = this.$store.state.liste_departements.list;
      return this.esps;
    },
    drawer() {
      return this.$store.state.commun.drawer;
    },
  },
};
</script>
