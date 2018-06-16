$(document).ready(function(){
    $("ul").hide();
    $("#summer").hide();
    $("section:not(#main-content)").hide();

    var num = -1;
    var downArrow = "▾";
    var upArrow = "▴";
    var toggleTime = 500;
    
    function swapArrows (element)
    {
        var num = -1;

        if (element.substring(0, 4) === "#day")
        {
            num = element.substring(4, 5);
        }
        
        var initArrow = $(element).html().substring($(element).html().length -1);
        if (initArrow === downArrow)
        {
            $(element).html(String($(element).html()).substring(0,$(element).html().length-1) + upArrow);
            if (num != -1)
            {
                hideLineBreak(num); 
            }
            
        }
        else
        {
            $(element).html(String($(element).html()).substring(0,$(element).html().length-1) + downArrow);
            if (num != -1)
            {
                showLineBreak(num);
            }
            
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

    $("#summerHead").click(function(){
        $("#summer").toggle(toggleTime);
        swapArrows("#summerHead");
    });

    $("#robo2018Head").click(function(){
        $("#robo2018").toggle(toggleTime);
        swapArrows("#robo2018Head");
    });

    $("#scouting2018Head").click(function(){
        $("#scoutingApp2018").toggle(toggleTime);
        swapArrows("#scouting2018Head");
    });
    $("#day1").click(function(){
        num = 1;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows("#day" + num);
        
    });
    $("#day2").click(function(){
        num = 2;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows("#day" + num);
    });
    $("#day3").click(function(){
        num = 3;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows("#day" + num);
    });
    $("#day4").click(function(){
        num = 4;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows("#day" + num);
    });
    $("#day5").click(function(){
        num = 5;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows("#day" + num);
    });
    $("#day6").click(function(){
        num = 6;
        $("#day" + String(num) + "List").toggle(toggleTime);
        swapArrows("#day" + num);
    });
});
