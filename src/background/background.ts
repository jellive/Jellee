// const isThisBackground = true;
// console.log('isThisBackground', isThisBackground);

const filter = {
    urls: ['*://facebook.com/*'],
}

const opt = ['blocking']

window.chrome.webRequest.onBeforeRequest.addListener(
    (page) => {
        console.log('page blocked - ' + page.url)

        return {
            cancel: true,
        }
    },
    filter,
    opt,
)
