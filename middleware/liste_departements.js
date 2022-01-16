export default async function({ store, $axios }) {

    console.log("middleware liste departements");
    if (!store.getters['liste_departements/isload']) {
        console.log("middleware liste departements apres test");
        //let ret = await $axios.$get("http://antarea.fr/iden/esp");
        let ret = await $axios.$get("/api/dep");
        console.log("middleware liste departements apres axios");
        console.log("middleware liste departements ret");
        //console.log(ret);
        store.commit('liste_departements/put', ret);
    }
}