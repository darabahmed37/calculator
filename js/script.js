let button = document.getElementById("toggle");
let clickable = document.getElementById("clickable");
let style2 = document.getElementById("style-2");
let style3 = document.getElementById("style-3");
toggle.addEventListener("click", (e) => {
    if (clickable.classList.length == 0) {
        clickable.classList.add("on2");
        style2.setAttribute("href", "./css/style-2.css");
    } else if (clickable.classList.contains("on2")) {
        {
            clickable.classList.add("on3");
            style2.setAttribute('href', "");
            style3.setAttribute('href', "./css/style-3.css");
            clickable.classList.remove("on2");
        }
    } else if (clickable.classList.contains("on3")) {
        {
            clickable.classList.remove("on3");
            style3.setAttribute('href', "");
        }
    }
});
