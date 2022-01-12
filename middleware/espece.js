export default function({ store, $axios, route }) {
    console.log("middleware espece");
    store.commit('espece/initinfos');
    if (route.params.nom) {
        $axios.$get("/api/pageiden/" + route.params.nom)
            .then((response) => {
                if (response.infos) {
                    console.log(response);
                    store.commit('espece/majinfos', response);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}