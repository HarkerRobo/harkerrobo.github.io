$(document).ready(function(){
    $("ul").hide();
    var num = -1;
    var downArrow = "▾";
    var upArrow = "▴";
    var toggleTime = 500;
    
    function swapArrows (num)
    {
        var day = "#day" + num; 
        var initArrow = $(day).html().substring($(day).html().length -1);
        if (initArrow === downArrow)
        {
            $(day).html(String($(day).html()).substring(0,$(day).html().length-1) + upArrow);
            hideLineBreak(num);
        }
        else
        {
            $(day).html(String($(day).html()).substring(0,$(day).html().length-1) + downArrow);
            showLineBreak(num);
        }
    }

    function showLineBreak (num)
    {
        var lineBreak = "#br" + num;
        var listHTML = $("#day" + num + "List").html();
        var tempHTML = String(listHTML);
        while (tempHTML.indexOf("<li") >= 0)
        {
            tempHTML = tempHTML.replace("<li", "")
        }
        
        var numLines = (listHTML.length - tempHTML.length) / 3;

        var newToggleTime = toggleTime;
        if (numLines <= 3)
        {
            newToggleTime /= Math.pow(numLines, 1.5)
        }
        else
        {
            newToggleTime /= Math.pow(numLines, 0.3)
        }
        setTimeout(function() {
            $(lineBreak).show(0);
        }, newToggleTime);
    }

    function hideLineBreak (num)
    {
        var lineBreak = "#br" + num;
        setTimeout(function() {
            $(lineBreak).hide(0);
        }, 0);
    }


    $("#day1").click(function(){
        num = 1;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows(num);
        
    });
    $("#day2").click(function(){
        num = 2;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows(num);
    });
    $("#day3").click(function(){
        num = 3;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows(num);
    });
    $("#day4").click(function(){
        num = 4;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows(num);
    });
    $("#day5").click(function(){
        num = 5;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows(num);
    });
});
