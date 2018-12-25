export default class Page {
    open(path) {
        browser.url(path)
    }
    
    getTitle() {
        browser.getTitle()
    }
}