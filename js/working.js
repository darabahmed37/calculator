function get(params) {
    let clickedButton = document.getElementById(params).innerHTML;
    let output = document.getElementById("calculated");
    switch (clickedButton) {
        case "0":
            output.innerHTML += "0";
            break;
        case "1":
            output.innerHTML += "1";
            break;
        case "2":
            output.innerHTML += "2";
            break;
        case "3":
            output.innerHTML += "3";
            break;
        case "4":
            output.innerHTML += "4";
            break;
        case "5":
            output.innerHTML += "5";
            break;
        case "6":
            output.innerHTML += "6";
            break;
        case "7":
            output.innerHTML += "7";
            break;
        case "8":
            output.innerHTML += "8";
            break;
        case "9":
            output.innerHTML += "9";
            break;
        case ".":
            if (output.innerHTML[output.innerHTML.length - 1] != ".") output.innerHTML += ".";
            else if (output.innerHTML == "") output.innerHTML += "0.";
            break;
        case "Reset":
            output.innerHTML = "";
            break;
        case "+":
            output.innerHTML += "+";
            break;
        case "-":
            output.innerHTML += "-";
            break;
        case "x":
            output.innerHTML += "x";
            break;
        case "/":
            output.innerHTML += "/";
            break;
        case '=':


    }
}
