// function playnow(){
//     const homesection=document.getElementById('home-screen');
//     homesection.classList.add('hidden');

//     const playgrounds=document.getElementById('playground');
//     playgrounds.classList.remove('hidden');
// }
function continuegame(){
    const alphabet=getRandomAlphabets();
    console.log(alphabet);


    const showalphabet=document.getElementById('current_alphabet');
    showalphabet.innerText=alphabet;

   

}


function playnow(){
    hideelement('home-screen');
    showelement('playground');
    continuegame();
    // addbackgroundcolor(alphabets);
}

