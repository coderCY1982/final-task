/*ハンバーガーメニューを開閉させる命令*/
(function($) {
    $(function() {
        var $header = $('#global-nav'); //#box-headerを取得して変数に格納
        // Toggle Buttonの処理
        $('#menu-sp').click(function(){ //#menu-spを取得して変数に格納
            $header.toggleClass('open'); //.openのcssを取得してメニューを開閉
            $('#menu-sp i').toggleClass('fa-bars'); //.fa-barsがあれば追加、なければ削除
            $('#menu-sp i').toggleClass('fa-times'); //.fa-timesがあれば追加、なければ削除
        });
    });
})(jQuery);
