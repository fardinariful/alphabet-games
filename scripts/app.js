// function playnow(){
//     const homesection=document.getElementById('home-screen');
//     homesection.classList.add('hidden');

//     const playgrounds=document.getElementById('playground');
//     playgrounds.classList.remove('hidden');
// }
function handlerkeyboardpress(event){

       const playerpressed=event.key;
       console.log('Player pressed',playerpressed);

    //    expected key that are player should pressed
   const currentAlphabet=document.getElementById('current_alphabet');
   const expectedAlphabet = currentAlphabet.innerText.toLocaleLowerCase();
   console.log('Expected Alphabet',expectedAlphabet);

   if(playerpressed === expectedAlphabet){
    console.log('You get a point');
    //current score
    // const CurrentScoreElement=document.getElementById('current_score');
    // const CurrentScoreText=CurrentScoreElement.innerText;
    // const currentscore=parseInt(CurrentScoreText);
    // console.log(currentscore);
    const currentscore=getlifescorenumberbyID('current_score');
    const updatedscore=currentscore+1;
    setlifescorenumberbyID('current_score',updatedscore);
    

    removebackgroundcolor(expectedAlphabet);
    continuegame();
   }

   else{
    const currentlifeElement = document.getElementById('current_life');
    const currentlifeText=currentlifeElement.innerText;
    const currentlife=parseInt(currentlifeText);
    //console.log(currentlife);

    //Decrase score
    const newlife=currentlife-1;

    //set new life
    currentlifeElement.innerText=newlife;
    //console.log('You lose');

     if(newlife === 0){
        gameover();
        const finalscoreelement=document.getElementById('final_score');
        const finalscoretext=finalscoreelement.innerText;
        const finalscore= parseInt(finalscoretext);
        finalscore.innerText=newscore;
    }

   }
   
}
document.addEventListener('keyup',handlerkeyboardpress);




function continuegame(){
    const alphabet=getRandomAlphabets();
    console.log('Your Random Alphabet',alphabet);

     const showalphabet=document.getElementById('current_alphabet');
     showalphabet.innerText=alphabet;

    addbackgroundcolor(alphabet);

}


function playnow(){
    hideelement('home-screen');
    showelement('playground');
    continuegame();
   
}

function gameover(){
    hideelement('playground');
    showelement('score');

}

