const scrapeCategory =  (browser,url)=> new Promise(async(resolve,reject)=>{
    try {
        let page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector('#webpage')

        resolve();
    } catch (error) {
        console.log("Loi scrape category: " + error);
        reject(error)
    }
})
    


module.exports =  {
    scrapeCategory
}
