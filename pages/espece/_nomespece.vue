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

      <v-col cols="auto" sm="8" md="6" v-if="esp_infos != null">
        <v-card>
          <v-card-title class="headline">
           <div>{{ esp_infos.infos.genre }} {{ esp_infos.infos.espece }}</div>
          </v-card-title>
          <v-card-text>
              <div>{{ nom_espece}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "indexPageEspece",
  middleware: ["liste_especes"],
  data() {
    
    return {
      nom_espece : this.$route.params.nomespece,  
      esps: [],
      esp_infos: null
    };
  },
  async fetch() {
    this.esp_infos = await this.$axios.$get('http://antarea.fr/iden/pageiden/'+this.nom_espece)
  },
  computed: {
    infos: function () {
      this.esps = this.$store.state.liste_especes.list;
      return this.esps;
    },
    drawer() {
      return this.$store.state.commun.drawer;
    },
  },
};
</script>
