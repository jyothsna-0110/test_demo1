const { browser } = require("protractor")

module.exports = {
    go:function(site) {
        browser.get(site);
    },
    getTitle: function() {
        return browser.getTitle();
    }
}