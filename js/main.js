document.getElementById("verticalMenuButton").addEventListener("click", function()
{
    if(document.getElementById("verticalHeader").style.left === "0px"){
        document.getElementById("verticalHeader").style.left = "-200px";
    }
    else{
        document.getElementById("verticalHeader").style.left = "0px";
    }
    console.log(document.getElementById("verticalHeader").style.left);
});