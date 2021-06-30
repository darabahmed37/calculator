let value = '';
let sign = '';
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
        case "-":

        case "/":
            output.innerHTML += clickedButton;
            break;
        case "x": output.innerHTML += '*'; break;
        case "DEL":
            output.innerHTML = output.innerHTML.replace(output.innerHTML[output.innerHTML.length - 1], "");
            break;
        case "Equal":
            output.innerHTML = calc(InfixtoPostfix(output.innerHTML));
    }
}
// Created an empty array
var stackarr = [];

// Variable topp initialized with -1
var topp = -1;

// Push function for pushing
// elements inside stack
function push(e) {
    topp++;
    stackarr[topp] = e;
}

// Pop function for returning top element
function pop() {
    if (topp == -1)
        return 0;
    else {
        var popped_ele = stackarr[topp];
        topp--;
        return popped_ele;
    }
}

// Function to check whether the passed
// character is operator or not
function operator(op) {
    if (op == '+' || op == '-' ||
        op == '^' || op == '*' ||
        op == '/' || op == '(' ||
        op == ')') {
        return true;
    }
    else
        return false;
}

// Function to return the precedency of operator
function precedency(pre) {
    if (pre == '@' || pre == '(' || pre == ')') {
        return 1;
    }
    else if (pre == '+' || pre == '-') {
        return 2;
    }
    else if (pre == '/' || pre == '*') {
        return 3;
    }
    else if (pre == '^') {
        return 4;
    }
    else
        return 0;
}

// Function to convert Infix to Postfix
function InfixtoPostfix(infixval) {

    var postfix = [];
    var temp = 0;
    push('@');

    for (var i = 0; i < infixval.length; i++) {
        var el = infixval[i];

        if (operator(el)) {
            if (el == ')') {
                while (stackarr[topp] != "(") {
                    postfix[temp++] = pop();
                }
                pop();
            }

            else if (el == '(') {
                push(el);
            }

            else if (precedency(el) > precedency(stackarr[topp])) {
                push(el);
            }
            else {
                while (precedency(el) <=
                    precedency(stackarr[topp]) && topp > -1) {
                    postfix[temp++] = pop();
                }
                push(el);
            }
        }
        else {
            postfix[temp++] = el;
        }
    }

    while (stackarr[topp] != '@') {
        postfix[temp++] = pop();
    }

    var st = "";
    for (var i = 0; i < postfix.length; i++)
        st += postfix[i];

    return st;
}
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    getLength() {
        return this.count;
    }

    push(item) {
        this.items.push(item);
        this.count = this.count + 1;
    }

    pop() {
        if (this.count > 0) {
            this.count = this.count - 1;
        }

        return this.items.pop();
    }

    peek() {
        return this.items.slice(-1)[0];
    }
}
function calc(expression) {
    //create new stack
    let stack = new Stack();

    //loop through each character in provided expression
    for (let idx = 0; idx < expression.length; idx++) {

        let token = expression[idx];


        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let rhs = stack.pop();
            let lhs = stack.pop();

            if (rhs === "UnderFlow" || lhs === "UnderFlow") {
                return "Can't perform postfix calculation";
            }
            switch (token) {
                case '+':
                    stack.push(lhs + rhs);
                    break;
                case '-':
                    stack.push(lhs - rhs);
                    break;
                case '*':
                    stack.push(lhs * rhs);
                    break;
                case '/':
                    stack.push(lhs / rhs);
                    break;
                case '%':
                    stack.push(lhs % rhs);
                    break;
            }
        }

    };

    return stack.pop();
}
