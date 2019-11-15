export const state = () => (
    {
        posts: [],
        modalLoginStatus: false,
        urlTriedToVisit: null
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
    SET_URL_TRIED_TO_VISIT(state, urlTriedToVisit) {
        state.urlTriedToVisit = urlTriedToVisit
    },
}

export const actions = {
    setPosts({commit}, posts) {
        commit("SET_POSTS", posts)
    },
    setModalLoginStatus({commit}, modalLoginStatus) {
        commit("SET_MODAL_LOGIN_STATUS", modalLoginStatus)
    },
    setUrlTriedToVisit({commit}, urlTriedToVisit) {
        commit("SET_URL_TRIED_TO_VISIT", urlTriedToVisit)
    },
}