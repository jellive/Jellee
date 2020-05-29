// const isThisBackground = true;
// console.log('isThisBackground', isThisBackground);
import { FILTER_ADDR } from '../popup/src/models'


const filter = {
  urls: ['*://facebook.com/*'],
}

chrome.storage.onChanged.addListener(changes => {
  for (const key in changes) {
    const storageChange = changes[key]
    filter.urls = JSON.parse(storageChange.newValue)
  }
})


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
