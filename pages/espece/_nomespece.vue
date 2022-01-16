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

    <v-row justify="center" align="center"  v-if="info_esp != null">
      <v-col cols="auto" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            {{ info_esp.genre }} {{ info_esp.espece }}
            {{ info_esp.commentaire }}
          </v-card-title>
          <v-card-actions> </v-card-actions>
        </v-card>
        <v-expansion-panels v-model="panel" multiple>
          <v-expansion-panel>
            <v-expansion-panel-header
              >Informations générales</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-card>
                <v-card-text>
                  <div>
                    Cette espèce a été identifiée {{ statistiques.nbiden }} fois
                    dans {{ nombre_dep }} départements entre
                    {{ statistiques.pre }} et {{ statistiques.der }}.
                  </div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Identifications</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card>
                <v-card-text>
                  <v-data-table
                    dense
                    :headers="headers"
                    :items="identifications"
                    :items-per-page="5"
                    class="elevation-4"
                  ></v-data-table>
                </v-card-text>
                <v-card-actions> </v-card-actions>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
      panel: [0,1],
      nom_espece: this.$route.params.nomespece,
      esps: [],
      stats: null,
      infos_esp: null,
      nb_dep: 0,
      idens: null,
      stat: null,
      headers: [
        {
          text: "date de récolte",
          align: "start",
          sortable: false,
          value: "date_recolt",
        },
        { text: "Lieu", value: "lieu" },
        { text: "Récolteur", value: "recolteur" },
      ],
    };
  },
  computed: {
    infos: function () {
      this.esps = this.$store.state.liste_especes.list;
      return this.esps;
    },
    info_esp: function () {
      this.infos_esp = this.$store.state.espece.infos.infos;
      return this.infos_esp;
    },
    identifications: function () {
      this.idens = this.$store.state.espece.infos.data;
      return this.idens;
    },
    nombre_dep: function () {
      this.nb_dep = this.$store.state.espece.infos.nb_dep;
      return this.nb_dep;
    },
    statistiques: function () {
      this.stat = this.$store.state.espece.infos.stats;
      return this.stat;
    },
    drawer() {
      return this.$store.state.commun.drawer;
    },
  },
};
</script>
