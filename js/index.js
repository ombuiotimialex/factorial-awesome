function factorial() {
    let a = Number.parseInt(document.getElementById("a").value)
    var b = 1;

    if (a < 1) {
    if (a < 1 || a === Number.NaN || (a - Math.round(a) != 0)) {
        alert("Invalid input");
    } else if(typeof a==="string") {
        alert("invalid input")
    }else{
        for (var i = a; i > 0; i--) {
            b = b * i;
        }

        let solution = document.getElementById("solution");

        solution.style.visibility = "visible";

        document.getElementById("solution").innerText = a + "! =" + b;
    }
}