$(document).ready(function(){
    $("ul").hide();
    $("#day1").click(function(){
        $("#day1List").toggle(1000);
    });
    $("#day2").click(function(){
        $("#day2List").toggle(1000);
    });
    $("#day3").click(function(){
        $("#day3List").toggle(1000);
    });
    $("#day4").click(function(){
        $("#day4List").toggle(1000);
    });
    $("#day5").click(function(){
        $("#day5List").toggle(1000);
    });
});
/*
    $("#hWeek1").click(function(){
            $("#week1").toggle(500);
            var $s = $("#hWeek1").not($(arrow));
            $("hWeek1").text($s);
    });
    $("#hWeek2").click(function(){
            $("#week2").toggle(500);
       
        
    });
    $("#hWeek3").click(function(){
            $("#week3").toggle(500);
       

    });*/
    
    /*$("div:not(#main)").click(function(){
        $(this).toggle();
    });*/
