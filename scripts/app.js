// function playnow(){
//     const homesection=document.getElementById('home-screen');
//     homesection.classList.add('hidden');

//     const playgrounds=document.getElementById('playground');
//     playgrounds.classList.remove('hidden');
// }
function handlerkeyboardpress(event){
    const playerpressed=event.key;
    console.log('player pressed',playerpressed);

    const currentAlphabet=document.getElementById('current_alphabet');
    console.log('Expected alphabet',currentAlphabet.innerText);

}
document.addEventListener('keyup',handlerkeyboardpress);




function continuegame(){
    const alphabet=getRandomAlphabets();
    console.log(alphabet);

    const showalphabet=document.getElementById('current_alphabet');
    showalphabet.innerText=alphabet;

    addbackgroundcolor(alphabet);

}


function playnow(){
    hideelement('home-screen');
    showelement('playground');
    continuegame();
   
}

