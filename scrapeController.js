const scrape = require('./scraper')


const scrapeController = async (browserInstance)=>{
    try {
        const url = "https://phongtro123.com"

        let browser = await browserInstance

        let category = scrape.scrapeCategory(browser,url)

        
    } catch (error) {
        console.log("Lỗi scrapeController " + error);
    }
}

module.exports = scrapeController;