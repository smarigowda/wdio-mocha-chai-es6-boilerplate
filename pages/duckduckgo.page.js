import Page from './page'

class DuckDuckGoPage extends Page {
    open(searchText) {
        super.open(`/${searchText}`)
    }
}

export default new DuckDuckGoPage()