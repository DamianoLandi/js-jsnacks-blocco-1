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

var snack1 = document.getElementById("snack1");

if (isNaN(numbSum)){
    console.log("Dati inseriti non validi")
    snack1.innerHTML = "Dati inseriti non validi";
}else{
    snack1.innerHTML = numbSum;
    console.log(numbSum);
}

//SNACK 2

//Raccolta Variabili

do{
    var numb = parseInt(prompt("Inserisci un numero"))
}while(isNaN(numb));

//Logica e Print

var snack2 = document.getElementById("snack2");

if (numb % 2 === 0){
    console.log(numb);
    snack2.innerHTML = numb;
}else{
    console.log(numb + 1);
    snack2.innerHTML = numb + 1;
}

//SNACK 3

//Dichiarazione degli Array

var nomi = ["Giorgio", "Paolo", "Carla", "Anna", "Francesca", "Giuseppe", "Luca"];

var cognomi = ["Rossi", "Verdi", "Bianchi", "Viola", "Azzurri", "Landi", "Biscotto"];

var falseList = [];

//Generazione dei Valori Random, Check di non Ripetizone e Inserimento nell'Array

while (falseList.length < 3){
    var falseName = cognomi[Math.floor(Math.random() * 7)] + " " + nomi[Math.floor(Math.random() * 7)];
    if (!falseList.includes(falseName)){
        falseList.push(falseName);
    }
}

//Print

var snack3 = document.getElementById("snack3");

var listPrint = "";

for (var i2 = 0; i2 < falseList.length; i2++){
    listPrint += "<li>" + falseList[i2] + "</li>";
}

snack3.innerHTML = listPrint;

console.table(falseList);

//SNACK 4

//Dichiarazione Array Iniziali

var firstArr = [453, 465, 7, 765, 69, 420];

var secondArr = [453, 7, 69, 420];

//Logica di Controllo della Lunghezza e Inserimento dei Dati Random Necessari

if (firstArr.length > secondArr.length){
    while(firstArr.length != secondArr.length){
        secondArr.push(Math.floor(Math.random() * 778));
    }
}else if (firstArr.length < secondArr.length){
    while(firstArr.length != secondArr.length){
        firstArr.push(Math.floor(Math.random() * 778));
    }
}

//Print

var length1 = document.getElementById("length1");

var length2 = document.getElementById("length2");

length1.innerHTML = firstArr.length;

length2.innerHTML = secondArr.length;

console.log(firstArr.length);

console.table(firstArr);

console.log(secondArr.length);

console.table(secondArr);