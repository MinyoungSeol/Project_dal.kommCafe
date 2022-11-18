$(document).ready(function() {

    $(".tab button:first").click(function() {
        $(".tab button").css("color", "#999");
        $(this).css("color", "#c51d2a");
        $(".menuCon").css({ "display": "none" });
        $(".coffeeCon").fadeIn("fast");
        $(".menuInfo").fadeOut(50);
    });

    $(".tab button:nth-of-type(2)").click(function() {
        $(".tab button").css("color", "#999");
        $(this).css("color", "#c51d2a");
        $(".menuCon").css({ "display": "none" });
        $(".nonCoffeeCon").fadeIn("fast");
        $(".menuInfo").fadeOut(50);
    });

    $(".tab button:nth-of-type(3)").click(function() {
        $(".tab button").css("color", "#999");
        $(this).css("color", "#c51d2a");
        $(".menuCon").css({ "display": "none" });
        $(".teaCon").fadeIn("fast");
        $(".menuInfo").fadeOut(50);
    });

    $(".tab button:last").click(function() {
        $(".tab button").css("color", "#999");
        $(this).css("color", "#c51d2a");
        $(".menuCon").css({ "display": "none" });
        $(".etcCon").fadeIn("fast");
        $(".menuInfo").fadeOut(50);
    });




    $(".goUp").click(function() {
        $('html, body').animate({
            scrollTop: '0'
        }, 800);
        return false;
    });

});
