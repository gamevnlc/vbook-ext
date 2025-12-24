load('libs.js');

function execute(url) {
    var browser = Engine.newBrowser();      // Khởi tạo browser
    browser.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    browser.launch(url, 10000);   // 10 giây timeout
    // Execute JavaScript trên trang
    browser.callJs("window.scrollTo(0, document.body.scrollHeight)", 2000);
    let doc = browser.html();  
    browser.close();

    let elems = $.QA(doc, 'div.read-content.j_readContent');
    if (!elems.length) return null;
    var htm = $.Q(doc, 'div.read-content.j_readContent').html();

    var author_say = doc.select('.author-say p').first().html();
    if (author_say) {
        htm = htm + "<br><br>PS:<br><br>" + author_say;
    }
    htm = htm.replace(/<br\s*\/?>|\n/g, "<br><br>");
    return Response.success(htm);
}