function hideelement(elementID){
    const element=document.getElementById(elementID);
    element.classList.add('hidden');
}

function showelement(elementID){
    const element=document.getElementById(elementID);
    element.classList.remove('hidden');
}

function getRandomAlphabets(){
    const alphabets_string= 'abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabets_string.split('');




    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    console.log(alphabet);
    return alphabet;


}