console.log("ok");

//SNACK 1

//Dichiarazione Variabile

var numbSum = 0;


//Risoluzione con For

/*for(var i = 0; i < 5; i++){
    numbSum += parseInt(prompt("Inserisci un Numero"));
}

console.log(numbSum);*/

//Risoluzione con While
var i = 0;
while(i < 5){
    numbSum += parseInt(prompt("Inserisci un Numero"));
    i++;
}

//Print

if (isNaN(numbSum)){
    console.log("Dati inseriti non validi")
}else{
    console.log(numbSum);
}

//SNACK 2

//Raccolta Variabili

do{
    var numb = parseInt(prompt("Inserisci un numero"))
}while(isNaN(numb));

//Logica

if (numb % 2 === 0){
    console.log(numb);
}else{
    console.log(numb + 1);
}