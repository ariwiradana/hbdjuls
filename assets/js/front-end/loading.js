$(document).ready(function(){
    startLoading();
});

function startLoading(){
    let value = 0;
    barAnim();

    function barAnim() {
        $('body').css("overflow", "hidden");
        value += 5;
        $(".progress-bar").css("width", value + "%");
        if (value == 25 || value == 55 || value == 85) {
            return setTimeout(barAnim, 800);
        }

        value >= 100 || setTimeout(barAnim, 100);
    }
}
