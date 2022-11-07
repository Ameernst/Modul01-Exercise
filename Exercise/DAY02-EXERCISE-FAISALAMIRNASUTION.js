/// WRITE A CODE TO CONVERT CELCIUS TO FAHRENHEIT/////
let CELCIUS = 32
let FAHRENHEIT = 0

const convertTemp = (TempInCelsius) => {
    FAHRENHEIT = (9 * TempInCelsius + 160)/5
    console.log(FAHRENHEIT);
}

/// WRITE A CODE TO CHECK WETHER THE NUMBER IS ODD OR EVEN ///

var num=6;
  if(num%2==0)
    document.write(num + " is an Even Number");
    else
    document.write(num + " is an Odd Number");

/// WRITE A CODE TO CHECK WHETHER THE NUMBER IS PRIME NUMBER OR NOT///

function p() {
             
    var n, i, flag = true;
     
    // Getting the value form text
    // field using DOM
    n = document.myform.n.value;
    n = parseInt(n)
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
}
}

