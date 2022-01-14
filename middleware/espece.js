export default function({ store, $axios, route }) {
    console.log("middleware espece");
    console.log("middleware espece");
    store.commit('espece/initinfos');
    if (route.params.nomespece) {
        $axios.$get("http://antarea.fr/iden/pageiden/" + route.params.nomespece)
            .then((response) => {
                if (response.infos) {
                    console.log(response);
                    store.commit('espece/majinfos', response);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    } else {
        console.log("middleware espece pas lancé");
    }
}