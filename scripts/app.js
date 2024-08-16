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

    const currentscore=getlifescorenumberbyID('current_score');
    const updatedscore=currentscore+1;
    setlifescorenumberbyID('current_score',updatedscore);
    

    removebackgroundcolor(expectedAlphabet);
    continuegame();
   }

   else{

    const currentlife=getlifescorenumberbyID('current_life');
    const updatedlife=currentlife-1;
    setlifescorenumberbyID('current_life',updatedlife);

    if(updatedlife === 0){
        gameover();
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
    hideelement('score');
    showelement('playground');

    //reset life and score
    setlifescorenumberbyID('current_life',5);
    setlifescorenumberbyID('current_score',0);
    continuegame();
   
}

function gameover(){
    hideelement('playground');
    showelement('score');

}

