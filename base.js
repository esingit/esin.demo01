$(document).ready(function () {
    $("#search_btn").click(function () {
        $(".input").toggleClass('search_open');
        var keys = $(".input").val();
        if (keys.length > 2) {
            $(".input").val('');
            $("#myform").submit();
        } else {
            return false;
        }
    });
});

/* **************************************以上为搜索框滑动弹出脚本************************************** */

$(document).ready(function () {
    $(".training_box").children().hover(function () {

        if ($(this).index() == 0) {
            $('#s1').addClass('s_open');
        } else if ($(this).index() == 1) {
            { $('#s2').addClass('s_open'); }
        }
        else if ($(this).index() == 2) {
            { $('#s3').addClass('s_open'); }
        }
        else if ($(this).index() == 3) {
            { $('#s4').addClass('s_open'); }
        }
        else if ($(this).index() == 4) {
            { $('#s5').addClass('s_open'); }
        }

    }, function () {
        $(".training_section").removeClass('s_open');
    })
});

/* **************************************以上为尾部鼠标悬浮广告框滑动脚本************************************** */