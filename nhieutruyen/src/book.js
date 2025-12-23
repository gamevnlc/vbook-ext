load("config.js");
function execute(url, page) {
    if (!page) page = '1';
    let tocUrl = `${BASE_URL}${url}?page=${page}`

    let response = fetch(tocUrl, {
        headers: {"user-agent": UserAgent.chrome()},
    });
    if (response.ok) {
        let doc = response.html();
        let novelList = [];
        let current = doc.select("ul.ant-pagination > li.ant-pagination-item-active").attr('title');
        let next = parseInt(current) + 1
        let last = parseInt(doc.select("ul.ant-pagination > li.ant-pagination-item").last().attr("title"));
        if (next > last) {
            next = ''
        }
        doc.select('.box-content .items-center').forEach(e => {
            novelList.push(
                {
                    name: e.select("div > h3").text(),
                    link: e.attr("href"),
                    description: e.select("> div > div.mb-auto").text(),
                    cover: e.select("img").first().attr("src"),
                    host: BASE_URL
                }
            )
        })
        return Response.success(novelList, next);
    }

    return null;
}