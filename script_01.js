
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check
*/

// module: multiplication  a * b |  test:
output(multiply(2,3));
output(multiply(2,-3));
output(multiply(2.1,3.2));
output(multiply(2,0));

function multiply(a,b) {
    return a * b;  
}




// module: subtraction a - b |  test:
// output(subtract(2,3));
// output(subtract(2,-3));
// output(subtract(2.1,3.2));
// output(subtract(2,0));

function subtract(a,b) {
    return a - b;  
}



// module: addition a + b |  test:
// output(add(2,3));
// output(add(2,-3));
// output(add(2.1,3.2));
// output(add(2,0));

function add(a,b) {
    return a + b;
    
}

 
//4. Ausgabe in Konsole : check
// module: console output | test: 
// output("hello");
// output(20);
function output(inputData) {
    console.log(inputData)
}