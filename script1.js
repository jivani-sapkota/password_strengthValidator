const secretNumber = Math.floor(Math.random() * 10) + 1;
 const checkBtn = document.getElementById('checkBtn');
 const feedback = document.getElementById('feedback');

checkBtn.addEventListener('click', ()=>{
    const guess= +(document.getElementById('guess').value)
    if(guess<1 || guess>=10 ||  isNaN(guess)){
        feedback.textContent="please enter a valid number";
    }
    
   else if(guess==secretNumber){
        feedback.textContent="congrulations you guessed a number successfully";
        document.querySelector('body').style.backgroundColor= "pink";
    }
   else if(guess> secretNumber){
        feedback.textContent="too high";
    
    }
    else{
        feedback.textContent="too low";
    }
    });