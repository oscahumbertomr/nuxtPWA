export  const state = ()=> (
    { posts:[]}
    );

export const  getters = {
    posts(state){
        return state.posts
    }
}

export const mutations = {
    SET_POSTS(state,posts){
        state.posts = posts
    }
}

export const actions = {
    setPosts({commit},posts){
        commit("SET_POSTS",posts)
    }
}