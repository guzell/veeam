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


document.addEventListener("DOMContentLoaded", ready);//drop-down for USA
function ready() {
    var states = document.getElementById("states");
    var sel = document.getElementById("country");

    console.log(states);
    console.log(sel);
    onChangeSelector();
    sel.addEventListener("change",onChangeSelector);

    function onChangeSelector(){
        var val = sel.value;
        console.log(val);
        if (val == "USA") {
            states.style.display = 'block';
        } else {
            states.style.display = 'none';
        }
    }
}



$(document).ready(function() {//popap video
    $(".fancybox").fancybox({
            nextEffect  : 'none',
            prevEffect  : 'none',
            padding     : 0,
        });
});
