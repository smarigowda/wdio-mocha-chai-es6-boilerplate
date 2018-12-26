import DuckDuckGoPage from '../pages/duckduckgo.page'

describe ('duckduckgo', () => {
    it('page title', () => {
        browser.url('hello')
        debugger;
        browser.debug()
        browser.getTitle().should.be.equal('hello at DuckDuckGo')
    })
    it('page title - using page objects', () => {
        DuckDuckGoPage.open('hello')
        DuckDuckGoPage.getTitle().should.be.equal('hello at DuckDuckGo')
    })
})