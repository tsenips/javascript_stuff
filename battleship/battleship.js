var view = {
    //this method takes a string message and displays it in the messge display area
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    //this method displays MISS on the cell area
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    },
    //this method displays the SHIP on the cell area
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    }
};

/*var ship1 = {
    locations: ["10", "20", "30"],
    hits: ["", "", ""]
};

var ship2 = {
    locations: ["32", "33", "34"],
    hits: ["", "", ""]
};

var ship3 = {
    locations: ["63", "64", "65"],
    hits: ["", "", ""]
};*/

var ships = [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
             { locations: ["32", "33", "34"], hits: ["", "", ""] },
             { locations: ["63", "64", "65"], hits: ["", "", "hit"] }];

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Hello? Hello?");