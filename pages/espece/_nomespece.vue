<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          tag="a"
          style="min-height: 15px; padding: 6px 12px"
          v-for="esp in infos"
          :key="esp.url"
          :to="`/espece/${esp.url}`"
          nuxt
          router
          exact
        >
          <v-list-item-content style="padding: 0">
            <v-list-item-title v-text="`${esp.genre + ' ' + esp.espece}`" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-row justify="center" align="center">
      <v-col cols="auto" sm="8" md="6">
        <v-card v-if="info_esp != null">
          <v-card-title class="headline"> 
            {{ info_esp.genre }} {{ info_esp.espece }}
          </v-card-title>
          <v-card-text>
            <div>Nombre de département : {{nombre_dep}}</div>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "indexPageEspece",
  middleware: ["liste_especes", "espece"],
  data() {
    return {
      nom_espece: this.$route.params.nomespece,
      esps: [],
      stats: null,
      infos_esp: null,
      nb_dep: 0,
      recolts: null,
    };
  },
  computed: {
    infos: function () {
      this.esps = this.$store.state.liste_especes.list;
      return this.esps;
    },
    info_esp: function () {
      console.log("computed info esp");
      console.log(this.$store.state.espece.infos.infos);
      this.infos_esp = this.$store.state.espece.infos.infos;
      return this.infos_esp;
    },
    nombre_dep: function () {
      this.nb_dep = this.$store.state.espece.infos.nb_dep;
      return this.nb_dep;
    },
    drawer() {
      return this.$store.state.commun.drawer;
    },
  },
};
</script>
