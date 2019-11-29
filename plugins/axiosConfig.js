export default function ({ $axios, redirect, store,route }) {

    $axios.onResponseError(error => {
        const code = parseInt(error.response && error.response.status)
        // console.log(error)
        window.erplug = error
        if (code === 401 && !/api\/auth\/user/.test(error.config.url)) {
            console.log('401')
            // urlTriedToVisit = item.to
            store.dispatch('setUrlTriedToVisit', route.path)
            store.dispatch('setModalLoginStatus', true)
            // redirect('/401')
        }
    })
}