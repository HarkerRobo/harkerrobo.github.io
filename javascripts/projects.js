$(document).ready(function(){
    $("ul").hide();
    var num = -1;
    var downArrow = "▾";
    var upArrow = "▴";
    
    function swapArrows (num)
    {
        var day = "#day" + num; 
        var initArrow = $(day).html().substring($(day).html().length -1);

        if (initArrow === downArrow)
        {
            $(day).html(String($(day).html()).substring(0,$(day).html().length-1) + upArrow);
        }
        else
        {
            $(day).html(String($(day).html()).substring(0,$(day).html().length-1) + downArrow);
        }
    }
    $("#day1").click(function(){
        num = 1;
        $("#day" + String(num) + "List").toggle(1000);
        
        swapArrows(num);
        
    });
    $("#day2").click(function(){
        num = 2;
        $("#day" + String(num) + "List").toggle(1000);
        swapArrows(num);
    });
    $("#day3").click(function(){
        num = 3;
        $("#day" + String(num) + "List").toggle(1000);
        swapArrows(num);
    });
    $("#day4").click(function(){
        num = 4;
        $("#day" + String(num) + "List").toggle(1000);
        swapArrows(num);
    });
    $("#day5").click(function(){
        num = 5;
        $("#day" + String(num) + "List").toggle(1000);
        swapArrows(num);
    });
});
