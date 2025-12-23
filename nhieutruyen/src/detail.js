load("config.js");

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url, {
        headers: {"user-agent": UserAgent.chrome()},
    });

    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1 a.text-lg").text(),
            cover: doc.select("img.object-cover").first().attr("src"),
            host: BASE_URL,
            author: doc.select("a[href*=tac-gia]").first().text(),
            description: doc.select("#synopsis .text-base").html(),
            detail: "",
            ongoing: doc.select("a[href*=truyen-moi]").text().indexOf("Đang ra") >= 0,
        });
    }
    return null;
}
