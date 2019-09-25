document.getElementById("verticalMenuButton").addEventListener("click", function()
{
    if(document.getElementById("verticalHeader").style.left === "0px"){
        document.getElementById("verticalHeader").style.left = "-200px";
    }
    else{
        document.getElementById("verticalHeader").style.left = "0px";
    }
    // document.getElementById("verticalHeader").style.left = document.getElementById("verticalHeader").style.left === "0" ? "-200px" : "0";
    console.log(document.getElementById("verticalHeader").style.left);
});