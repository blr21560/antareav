export const state = () => ({
    list: []
})

export const getters = {
    //    isload: (state) => state.list.length !== 0,
    isload: (state) => state.list.length > 0,
    getList: (state) => state.list
}

export const actions = {
    put: ({ commit }, newList) => {
        console.log("state newlist");
        return new Promise((resolve) => {
            commit('put', newList)
            resolve()
        })
    }
}

export const mutations = {
    put: (state, newList) => {
        console.log("state put");
        state.list = newList
    }
}