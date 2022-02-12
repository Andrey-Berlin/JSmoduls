let shotit = function() {

    html2canvas(document.getElementById('section'), {

        onrendered: function(canvas) {
            document.body.appendChild(canvas);
            leCanvas = document.getElementsByTagName("canvas")[0];
            let img = leCanvas.toDataURL("image/png");
            document.write('<br><br><span style="font:14px normal Helvetica, Arial; font-weight: bold; color:#13a6f5; margin-left:16px">Это Ваш скриншот. Нажав, можете сохранить как картинку. Чтобы вернуться, обновите страницу браузера:</span> <br><br> <img src="' + img + '"/>');
        },
        /*width: 390,
        height: 220*/
    });
}
