const scrapeCategory =  (browser,url)=> new Promise(async(resolve,reject)=>{
    try {
        let page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector('#webpage')

        const dataCategory = await page.$$eval('#navbar-menu > ul >li',result =>{
            dataCategory = result.map(el =>{
                return {
                    category : el.querySelector('a').innerText,
                    link: el.querySelector('a').href
                }
            })
            return dataCategory;
        })

        console.log(dataCategory);
        await page.close();
        resolve();
    } catch (error) {
        console.log("Loi scrape category: " + error);
        reject(error)
    }
})
    


module.exports =  {
    scrapeCategory
}
