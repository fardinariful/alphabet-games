// function playnow(){
//     const homesection=document.getElementById('home-screen');
//     homesection.classList.add('hidden');

//     const playgrounds=document.getElementById('playground');
//     playgrounds.classList.remove('hidden');
// }
function handlerkeyboardpress(event){

       const playerpressed=event.key;
       console.log('Player pressed',playerpressed);

       //stop game suddenly
       if(playerpressed === 'Escape'){
        gameover();
       }

    //    expected key that are player should pressed
   const currentAlphabet=document.getElementById('current_alphabet');
   const expectedAlphabet = currentAlphabet.innerText.toLocaleLowerCase();
   console.log('Expected Alphabet',expectedAlphabet);

   if(playerpressed === expectedAlphabet){

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
    //hide everything expect playground
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


     //final score set
    const last_score=getlifescorenumberbyID('current_score');
    setlifescorenumberbyID('final_score',last_score);
    
    //remove background color on current alphabet

    const last_alphabet=getElementbyID('current_alphabet');
    removebackgroundcolor(last_alphabet);


}

