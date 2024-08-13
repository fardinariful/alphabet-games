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
   }

   else{
    console.log('You lose');
   }


























    // const playerpressed=event.key;
    // console.log('player pressed',playerpressed);

    // const currentAlphabet=document.getElementById('current_alphabet');
    // const expectedAlphabet = currentAlphabet.innerText.toLocaleLowerCase();
    // console.log('Expected alphabet',expectedAlphabet);

    // if(playerpressed === expectedAlphabet ){
    //     console.log('You get a point')
    // }
    // else{
    //     console.log('You lose')
    // }

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

