function hideelement(elementID){
    const element=document.getElementById(elementID);
    element.classList.add('hidden');
}

function showelement(elementID){
    const element=document.getElementById(elementID);
    element.classList.remove('hidden');
}