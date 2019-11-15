export default function ({ $axios, redirect, store }) {

    console.log('axios plugin')
    $axios.onResponseError(response => {
        console.log('onResponseError plugin')
        const code = parseInt(response.response && response.response.status)
        console.log(response)
        window.erplug = response
        if (code === 401) {
            console.log(store.state.modalLoginStatus)
            redirect('/401')
        }
    })
}