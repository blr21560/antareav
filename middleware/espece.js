export default async function({ store, $axios, route }) {
    console.log("middleware espece");
    console.log("middleware espece");
    store.commit('espece/initinfos');
    if (route.params.nomespece) {
        //        let ret = await $axios.$get("http://antarea.fr/iden/espiden/" + route.params.nomespece)
        //let ret = await $axios.$get("http://localhost/testparceltailwind/back/espiden/" + route.params.nomespece)
        let ret = await $axios.$get("/api/espiden/" + route.params.nomespece)
        store.commit('espece/majinfos', ret);
    } else {
        console.log("middleware espece pas lancé");
    }
}