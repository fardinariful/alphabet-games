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
    console.log(alphabets);



    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    console.log(index);


}