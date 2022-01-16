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
            <v-list-item-title v-text="`${dep.nom + ' (' + dep.dep + ')'}`" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-row justify="center" align="center" v-if="especes != null">
      <v-col cols="auto" sm="8" md="6">
        <v-expansion-panels v-model="panel" multiple>
          <v-expansion-panel>
            <v-expansion-panel-header
              >Espèces identifiées dans le département</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-card>
                <v-card-text>
                  <v-data-table
                    dense
                    :headers="headers"
                    :items="especes"
                    :items-per-page="5"
                    class="elevation-4"
                  ></v-data-table>
                </v-card-text>
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
  name: "indexPageDepartement",
  middleware: ["liste_departements", "departement"],
  data() {
    return {
      panel: [0, 1],
      nom_departement: this.$route.params.nomdepartement,
      deps: null,
      idens: null,
      headers: [
        {
          text: "Espèce",
          align: "start",
          value: "espece",
        },
        { text: "Nombre d'identifications", value: "nb" },
      ],
    };
  },
  computed: {
    infos: function () {
      this.deps = this.$store.state.liste_departements.list;
      return this.deps;
    },
    especes: function () {
      this.esps = this.$store.state.departement.infos.esps;
      return this.esps;
    },
    identifications: function () {
      this.idens = this.$store.state.departement.infos.idens;
      return this.idens;
    },
    drawer() {
      return this.$store.state.commun.drawer;
    },
  },
};
</script>
