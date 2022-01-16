export default async function({ store, $axios, route }) {
    console.log("middleware departement");
    console.log(route.params.nomdepartement);
    store.commit('departement/initinfos');
    if (route.params.nomdepartement) {
        let ret = await $axios.$get("http://antarea.fr/iden/depiden/" + route.params.nomdepartement)
            //let ret = await $axios.$get("/api/depiden/" + route.params.nomdepartement)
        store.commit('departement/majinfos', ret);
    } else {
        console.log("middleware departement pas lancé");
    }
}