//SNACK 1

var ball = {
    Nome: "palla",
    Peso: 10,
}

var pallaDisplay = document.getElementById("palla");

var message = "";

for (var key in ball){
    message += "<li>" + key + ": " + ball[key] + "</li>";
}

console.log(message);

pallaDisplay.innerHTML = message;

ball.Peso = parseInt(prompt("Inserisci un numero"));

message = "";

for (var key in ball){
    message += "<li>" + key + ": " + ball[key] + "</li>";
}

console.log(message);

pallaDisplay.innerHTML = message;

//SNACK 2

var ball2 = {
    Nome: "palla",
    Peso: 10,
}

var pallaDisplay2 = document.getElementById("palla2");

var message2 = "";

for (var key in ball2){
    message2 += "<li>" + key + ": " + ball2[key] + "</li>";
}

console.log(message2);

pallaDisplay2.innerHTML = message2;

var enter = document.getElementById("enter");

var numbInput = document.getElementById("number");

enter.addEventListener("click",function(){

    ball2.Peso = numbInput.value;

    var message3 = "";

    for (var key in ball){
        message3 += "<li>" + key + ": " + ball2[key] + "</li>";
    }   

    console.log(message3);

    pallaDisplay2.innerHTML = message3;

});