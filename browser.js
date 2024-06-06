const puppeteer = require('puppeteer')

const startBrowser = async ()=>{
    let browser;
    try {
        browser = await puppeteer.launch({
            //co hien ui cua chrome hay khong
            headless:false, 
            //chorme su dung multi layer cuar sandbox de trnah nhung noi dung web k dang tin cay,
            //neu tin tuong content thi set nhu vay
            args:["--disable-setuid-sandbox"],
            //truy cap website bo qua loi lien quan http secure
            'ignoreHTTPSErrors' : true
        })
       
    } catch (error) {
        console.log("Khong tao duoc Browser",error);
    }
    return browser;
}

module.exports = startBrowser;