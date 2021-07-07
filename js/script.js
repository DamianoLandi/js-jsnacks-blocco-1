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

console.log(i);