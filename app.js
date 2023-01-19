document.getElementById('button').addEventListener('click', function () {

    let randomNum = Math.round(Math.random()*9)
   let alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
   let randomAlphabet = alphabet[Math.floor(Math.random()*alphabet.length)] ;
    
    let hexCode = '#' + randomAlphabet + randomNum + randomNum + randomAlphabet + randomNum + randomNum;
    
    document.getElementById('canvas').style.backgroundColor = hexCode;
} )


