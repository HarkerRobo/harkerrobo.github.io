function main() {
    if (!!window.chrome && !!window.chrome.webstore)
    {
        var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
        if (!fs) {
            result.textContent = "check failed?";
            return;
        }
        fs(window.TEMPORARY, 100, function (fs) {

        }, function (err) {
            document.getElementById("favicon").href = "../images/favicon.png";
        });
}
}

function changeButton(x)
{
    console.log(window.innerWidth);
    if (window.innerWidth > 975)
    {
        if (x == 1)
        {
            document.getElementById("autosizeImg").src = "images/github-logo-light.png";
            document.getElementsByClassName("button")[0].style.backgroundColor = "transparent";
            document.getElementsByClassName("button")[0].style.color = "rgb(255, 255, 255)";
        }
        else
        {
            document.getElementById("autosizeImg").src = ("images/github-logo-dark.png");
            document.getElementsByClassName("button")[0].style.backgroundColor = "white";
            document.getElementsByClassName("button")[0].style.color = "rgb(31, 49, 85)";
        }
    }
    else
    {
        if (x == 1)
        {
            document.getElementsByClassName("button")[0].style.backgroundColor = "transparent";
            document.getElementsByClassName("button")[0].style.color = "rgb(255, 255, 255)";
        }
        else
        {
            document.getElementsByClassName("button")[0].style.backgroundColor = "white";
            document.getElementsByClassName("button")[0].style.color = "rgb(31, 49, 85)";
        }
    }

}

function shouldResize()
{
    if (window.innerWidth < 975)
    {
        document.getElementById("autosizeImg").src = "";
        document.getElementById("gitButtonText").innerHTML = "Follow us on GitHub";
        document.getElementById("gitButtonText").style.marginLeft = "0%";
    }
    else
    {
        document.getElementById("autosizeImg").src = "images/github-logo-light.png";
        document.getElementById("gitButtonText").innerHTML = "Follow us on";
        document.getElementById("gitButtonText").style.marginLeft = "20%";
    }
    if (window.innerWidth < 615)
    {
        changeTerminal(0);
    }
    else
    {
        changeTerminal(1);
    }

}
function getLogin() {
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    var hour = date.getHours();
    var seconds = date.getSeconds();
    if(hour < 10)
    {
        hour = "0" + hour;
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }
    return "Last login: " + days[date.getDay()] + " " + months[date.getMonth()] + " " + hour + ":" + date.getMinutes() + ":" + seconds;
}

function changeTerminal(x) {
    if(x == 0)
    {
        document.getElementById("roboCodeCopy").innerHTML = "$ cd #enter your desired directory\n" +
            "$ git clone http://github.com/\n\tHarkerRobo/RoboCode2018\n" +
            "$ cd RoboCode2018\n" +
            "$ git fetch origin\n" +
            "$ git checkout master";
        document.getElementById("scoutingiOSCopy").innerHTML = "$ cd #enter your desired directory\n" +
            "$ git clone http://github.com/\n\tHarkerRobo/scouting-android\n" +
            "$ cd scouting-android\n" +
            "$ git fetch origin\n" +
            "$ git checkout master";
        document.getElementById("scoutingAndroidCopy").innerHTML = "$ cd #enter your desired directory\n" +
            "$ git clone http://github.com/\n\tHarkerRobo/scouting-ios\n" +
            "$ cd scouting-ios\n" +
            "$ git fetch origin\n" +
            "$ git checkout master";
    }
    else if (x == 1)
    {
        document.getElementById("roboCodeCopy").innerHTML = "$ cd #enter your desired directory\n" +
            "$ git clone http://github.com/HarkerRobo/RoboCode2018\n" +
            "$ cd RoboCode2018\n" +
            "$ git fetch origin\n" +
            "$ git checkout master";
        document.getElementById("scoutingiOSCopy").innerHTML = "$ cd #enter your desired directory\n" +
            "$ git clone http://github.com/HarkerRobo/scouting-android\n" +
            "$ cd scouting-android\n" +
            "$ git fetch origin\n" +
            "$ git checkout master";
        document.getElementById("scoutingAndroidCopy").innerHTML = "$ cd #enter your desired directory\n" +
            "$ git clone http://github.com/HarkerRobo/scouting-ios\n" +
            "$ cd scouting-ios\n" +
            "$ git fetch origin\n" +
            "$ git checkout master";
    }
}
function copyToClipboard(x)
{
    var str = "";
    if (x == 0)
    {
        str = document.getElementById("roboCodeCopy").textContent;
    }
    if (x == 1)
    {
        str = document.getElementById("scoutingiOSCopy").textContent;
    }
    if (x == 2)
    {
        str = document.getElementById("scoutingAndroidCopy").textContent;
    }
    while (str.indexOf("$ ") >= 0 )
    {
        str = str.replace("$ ", "");
    }
    document.getElementById("roboInput").innerHTML = str;
    var copyText = document.getElementById("roboInput");
    copyText.select();
    document.execCommand("copy");
}
