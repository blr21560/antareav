export default async function({ store, $axios }) {

    console.log("middleware liste espece");
    if (!store.getters['liste_especes/isload']) {
        console.log("middleware liste espece apres test");
        //let ret = await $axios.$get("http://antarea.fr/iden/esp");
        let ret = await $axios.$get("/api/esp");
        console.log("middleware liste espece apres axios");
        console.log("middleware liste espece ret");
        //console.log(ret);
        store.commit('liste_especes/put', ret);
    }
}