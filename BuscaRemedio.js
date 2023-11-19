function search_redemy() {
    let input = document.getElementById('searchbar').value
    input=input.toUpperCase();
    let x = document.getElementsByClassName('item');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toUpperCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}




/*
function randomNumberInterval(a,b){
    return Math.floor(Math.random()*(b - a + 1)) + a
}

console.log(randomNumberInterval)(11111,99999)*/
