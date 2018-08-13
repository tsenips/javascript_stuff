var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount;
    }
    console.log(balance);  //this is local in the function itself. it will be 9250
    return amount;
    cameraOn = true;
}

var amount = steal(balance, 1250);
console.log(balance);  //since this is global, it will be 10500
alert("Criminal: You stole " + amount + "!");
