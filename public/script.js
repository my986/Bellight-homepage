document.addEventListener("DOMContentLoaded", function () {
    try {
        new fullpage('#fullpage', {
            autoScrolling: true,  // 自動スクロールを有効
            navigation: true,  // ナビゲーションを有効
            navigationPosition: 'right',  // ナビゲーション位置を右に設定
            navigationTooltips: ['ホーム', '紹介', '動画', 'フッター'],  // ナビゲーションツールチップ
            showActiveTooltip: true,  // アクティブなセクションにツールチップを表示
            scrollOverflow: true,  // スクロール可能なコンテンツに対応
            scrollingSpeed: 700,  // スクロールの速さを調整（ミリ秒）
            easing: 'easeInOutCubic',  // スクロールアニメーションの加速・減速
            responsiveWidth: 1200,  // 画面幅が1200px未満の場合、fullPage.jsの動作を無効化
            responsiveHeight: 800,  // 画面高さが800px未満の場合、fullPage.jsの動作を無効化
        });
    } catch (e) {
        console.error("fullPage.jsの初期化に失敗しました: ", e);
    }
});
