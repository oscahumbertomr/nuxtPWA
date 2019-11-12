if ('serviceWorker' in navigator) {
   /* navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const worker of registrations) {
            console.log('Service worker:', worker)
        }
    });*/
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered!', reg))
        .catch(err => console.log('Boo!', err));
}