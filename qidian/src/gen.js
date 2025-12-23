load('libs.js');

function execute(url, page) {
    let host = 'https://www.qidian.com';

    url = (host + url).formatUnicorn({
        page: page || 1,
        year: new Date().getFullYear(),
        month: (new Date().getMonth() + 1).toString().padStart(2, '0')
    });

    var browser = Engine.newBrowser();      // Khởi tạo browser
    browser.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    browser.launch(url, 10000);   // 10 giây timeout
    // Execute JavaScript trên trang
    browser.callJs("window.scrollTo(0, document.body.scrollHeight)", 2000);
    let doc = browser.html();  
    browser.close();

    let data = [];

    let elems = $.QA(doc, '#rank-view-list > div > ul > li');

    if (!elems.length) return null;

    elems.forEach(function(e) {
        data.push({
            name: $.Q(e, '.book-mid-info h2 a').text(),
            link: $.Q(e, '.book-mid-info h2 a').attr('href').mayBeFillHost(host),
            cover: $.Q(e, 'div a img').attr('src').mayBeFillHost(host),
            description: $.Q(e, '.book-mid-info p.update a').text().replace('最新更新', '').trim(),
            host: host
        })
    })

    let next = $.Q(doc, '#rank-view-list .rank-tag', -1).text();
    // log(next);

    if (next) next = +next/20 + 1; // 20 items/page
    
    return Response.success(data, next);
}