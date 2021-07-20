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
