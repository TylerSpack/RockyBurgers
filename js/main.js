let ques1 = document.getElementById('question1');
let ans1 = document.getElementById('answer1');
let ques2 = document.getElementById('question2');
let ans2 = document.getElementById('answer2');
ans1.style.display = 'none';
ans2.style.display = 'none';


ques1.addEventListener('click',
function(){
        if (ans1.style.display === 'none')
        {
            ans1.style.display = 'inline';
        }
        else{
            ans1.style.display = 'none';
        }
});
ques2.addEventListener('click',
    function(){
        if (ans2.style.display === 'none')
        {
            ans2.style.display = 'inline';
        }
        else{
            ans2.style.display = 'none';
        }
});



