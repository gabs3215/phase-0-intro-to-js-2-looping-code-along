const names = (["Guadalupe", "Ollie", "Aki"],"surprise")

    function writeCards(name, value) {
    let myArrray = []
        for(let  loopCounter = 0; loopCounter < name.length; loopCounter++){
        myArrray.push(`Thank you, ${name[loopCounter]}, for the wonderful surprise gift!`)}
    return myArrray
 }

 function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
 }

    
  