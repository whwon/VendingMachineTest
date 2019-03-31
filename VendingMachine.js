function completeMessage() {
    var txt;
    if (confirm("Would you like to purchase these orders?")) {
        txt = "Order Confirmed";
    } else {
        txt = "Option Cancelled";
    }
    document.getElementById("order").innerHTML = txt;
}

function cancelMessage() {
    var text;
    if (confirm("Would you like to cancel these orders?")) {
        text = "Order Cancelled";
    } else {
        text = "Option Cancelled";
    }
    document.getElementById("order").innerHTML = text;
}

function myOrder() {
    var order = document.getElementById("myInput").value;

    switch(order) {
        case "A1":
            completeMessage();
            break;
        case "A2":
            completeMessage();
            break;
        case "A3":
            completeMessage();
            break;
        case "B1":
            completeMessage();
            break;
        case "B2":
            completeMessage();
            break;
        case "B3":
            completeMessage();
            break;
        case "C1":
            completeMessage();
            break;
        case "C2":
            completeMessage();
            break;
        case "C3":
            completeMessage();
            break;
        case "D1":
            completeMessage();
            break;
        case "D2":
            completeMessage();
            break;
        case "D3":
            completeMessage();
            break;
        default:
            text = "Invalid Input. Please Try Again.";
    }
    document.getElementById("order").innerHTML = text;
}
