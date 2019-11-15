export const state = () => (
    {
        posts: [],
        modalLoginStatus: false,
    }
);

export const getters = {
    posts(state) {
        return state.posts
    },
    modalLoginStatus(state){
        return state.modalLoginStatus
    }
}

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_MODAL_LOGIN_STATUS(state, modalLoginStatus) {
        state.modalLoginStatus = modalLoginStatus
    },
}

export const actions = {
    setPosts({commit}, posts) {
        commit("SET_POSTS", posts)
    },
    setModalLoginStatus({commit}, modalLoginStatus) {
        commit("SET_MODAL_LOGIN_STATUS", modalLoginStatus)
    },
}