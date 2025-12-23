function execute() {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1;
    return Response.success([
        {
            title: "Top Đề Cử",
            script: "book.js",
            input: "/xep-hang/de-cu"
        },
        {
            title: "Top Lượt Đọc",
            script: "book.js",
            input: "/xep-hang/luot-doc"
        },
        {
            title: "Truyện mới",
            script: "book.js",
            input: "/danh-sach/truyen-moi"
        },
        {
            title: "Truyện hoàn thành full",
            script: "book.js",
            input: "/danh-sach/truyen-hoan-thanh"
        },
    ]);
}
