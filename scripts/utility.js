function hideelement(elementID){
    const element=document.getElementById(elementID);
    element.classList.add('hidden');
}

function showelement(elementID){
    const element=document.getElementById(elementID);
    element.classList.remove('hidden');
}

function addbackgroundcolor(elementID){
    const element =document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}

function removebackgroundcolor(elementID){
    const element =document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}


function getlifescorenumberbyID(elementID){
    const element =document.getElementById(elementID);
    const elementText= element.innerText;
    const value= parseInt(elementText);
    return value;
}

function setlifescorenumberbyID(elementID,value){
    const element=document.getElementById(elementID);
    element.innerText=value;

}

function getRandomAlphabets(){
    const alphabets_string= 'abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabets_string.split('');

    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    // console.log(alphabet);
    return alphabet;

    
}