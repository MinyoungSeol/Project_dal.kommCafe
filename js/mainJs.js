    $("#circle1").mouseover(function() {
        $(this).children(".medal01").css({ "transform": "rotateY(-180deg)" });
        $(this).children(".medal02").css({ "transform": "rotateY(0deg)" });
    }).mouseleave(function() {
        $(this).children(".medal01").css({ "transform": "rotateY(0deg)" });
        $(this).children(".medal02").css({ "transform": "rotateY(-180deg)" });
    });

    $("#circle2").mouseover(function() {
        $(this).children(".medal03").css({ "transform": "rotateY(-180deg)" });
        $(this).children(".medal04").css({ "transform": "rotateY(0deg)" });
    }).mouseleave(function() {
        $(this).children(".medal03").css({ "transform": "rotateY(0deg)" });
        $(this).children(".medal04").css({ "transform": "rotateY(-180deg)" });
    });

    $("#circle3").mouseover(function() {
        $(this).children(".medal05").css({ "transform": "rotateY(-180deg)" });
        $(this).children(".medal06").css({ "transform": "rotateY(0deg)" });
    }).mouseleave(function() {
        $(this).children(".medal05").css({ "transform": "rotateY(0deg)" });
        $(this).children(".medal06").css({ "transform": "rotateY(-180deg)" });
    });

    $("#circle4").mouseover(function() {
        $(this).children(".medal07").css({ "transform": "rotateY(-180deg)" });
        $(this).children(".medal08").css({ "transform": "rotateY(0deg)" });
    }).mouseleave(function() {
        $(this).children(".medal07").css({ "transform": "rotateY(0deg)" });
        $(this).children(".medal08").css({ "transform": "rotateY(-180deg)" });
    });

    $(".goUp").click(function() {
        $('html, body').animate({
            scrollTop: '0'
        }, 800);
        return false;
    });