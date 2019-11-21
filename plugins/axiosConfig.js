export default function ({ $axios, redirect, store }) {
    $axios.onResponseError(response => {
        const code = parseInt(response.response && response.response.status)
        if (code === 401) {
            redirect('/401')
        }
    })
}