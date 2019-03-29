function completeMessage() {
    var txt;
    if (confirm("Would you like to purchase these orders?")) {
        txt = "Order Confirmed";
    } else {
        txt = "Option Cancelled";
    }
    document.getElementById("message").innerHTML = txt;
}

function cancelMessage() {
    var txt;
    if (confirm("Would you like to cancel these orders?")) {
        txt = "Order Cancelled";
    } else {
        txt = "Option Cancelled";
    }
    document.getElementById("message").innerHTML = txt;
}

var clickOrder = 0;
function myCost() {
    clickOrder += 1.50;
    document.getElementById("order").innerHTML = "Order Added: $" + clickOrder;
}
