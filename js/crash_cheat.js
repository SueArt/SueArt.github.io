var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://s2.ax1x.com/2019/05/18/EOEB4g.png");
        document.title = '页面崩溃啦qwq~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://s2.ax1x.com/2019/05/18/EOEB4g.png");
        document.title = '噫awa又好了~'; //+ OriginTitle
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);

        //B站图标 https://www.bilibili.com/favicon.ico
    }
});