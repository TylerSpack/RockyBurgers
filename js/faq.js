let ques1 = document.getElementById('question1');
let ans1 = document.getElementById('answer1');
let ques2 = document.getElementById('question2');
let ans2 = document.getElementById('answer2');
ans1.style.display = 'none';
ans2.style.display = 'none';


ques1.addEventListener('click',
function(){
        ans1.style.display = ans1.style.display === 'inline' ? 'none' : 'inline';
});
ques2.addEventListener('click',
    function(){
        ans2.style.display = ans2.style.display === 'inline' ? 'none' : 'inline';
});

document.getElementById("verticalMenuButton").addEventListener("click", function()
{
        document.getElementById("verticalHeader").style.left = document.getElementById("verticalHeader").style.left === "0" ? "-200px" : "0";
        console.log("toggled");
});


