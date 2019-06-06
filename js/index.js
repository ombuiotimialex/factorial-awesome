function factorial() {
    let a = Number.parseInt(document.getElementById("a").value)
    var b = 1;

    if (typeof a !== "number" && a < 1) {
        alert("Invalid input");
    } else {
        for (var i = a; i > 0; i--) {
            b = b * i;
        }

        let solution = document.getElementById("solution");

        solution.style.visibility = "visible";

        document.getElementById("solution").innerText = a + "! =" + b;
    }
}