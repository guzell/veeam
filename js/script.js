$(function() {//tabs
    var $tab = $('.tab');

    $tab.on("click", function() {
        var attr = $(this).attr("data-index");
        $tab.removeClass('active');
        $(this).addClass('active');
        $('.content').css('display','none');
        $('.content[data-index = '+attr+']').css('display','block');
    });
})


$(function(){//drop-down for USA
    var $sel = $('.country');
    $sel.on("change",function() {
        var $val = this.value;
        var $states = $(this).parents().find('.states');
        console.log($states);
        if ($val == "USA") {
            $states.css('display','block');
        } else {
            $states.css('display','none');
        }
    });
    $sel.trigger("change");
});


$(document).ready(function() {//popap video
    $(".fancybox").fancybox({
            nextEffect  : 'none',
            prevEffect  : 'none',
            padding     : 0,
        });
});
