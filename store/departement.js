export const state = () => ({
    ok: false,
    infos: {}
})

export const getters = {
    getInfos: (state) => state.infos,
    isOk: (state) => state.ok
}

export const actions = {
    majinfos: ({ commit }, newInfos) => {
        return new Promise((resolve) => {
            commit('majinfos', newInfos)
            resolve()
        })
    },
    initinfos: ({ commit }) => {
        return new Promise((resolve) => {
            commit('initinfos')
            resolve()
        })
    }
}

export const mutations = {
    majinfos: (state, newInfos) => {
        state.infos = newInfos;
        state.ok = true;
    },
    initinfos: (state) => {
        state.infos = {};
        state.ok = false;
    }
}