load("config.js")

function execute() {
    return Response.success([
        {
            title: "Đô Thị",
            script: "book.js",
            input: "/the-loai/do-thi"
        },
        {
            title: "Huyền Huyễn",
            script: "book.js",
            input: "/the-loai/huyen-huyen"
        },
        {
            title: "Đồng Nhân",
            script: "book.js",
            input: "/the-loai/dong-nhan"
        },
        {
            title: "Võng Du",
            script: "book.js",
            input: "/the-loai/vong-du"
        },
        {
            title: "Kiếm Hiệp",
            script: "book.js",
            input: "/the-loai/kiem-hiep"
        },
        {
            title: "Huyền Nghi",
            script: "book.js",
            input: "/the-loai/huyen-nghi"
        },
        {
            title: "Cạnh Kỹ",
            script: "book.js",
            input: "/the-loai/canh-ky"
        },
        {
            title: "Huyền Huyễn Ngôn Tình",
            script: "book.js",
            input: "/the-loai/huyen-huyen-ngon-tinh"
        },
        {
            title: "Ngôn Tình",
            script: "book.js",
            input: "/the-loai/ngon-tinh"
        },
        {
            title: "Light Novel",
            script: "book.js",
            input: "/the-loai/light-novel"
        },
    ]);
}