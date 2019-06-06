function product() {
    a = Number.parseInt(document.getElementById("a").value)
    b = 1;
    if (a == NaN) {
        alert("Invalid input");
    } else {
        for (i = a; i > 0; i--) {
            b = b * i;
        }

        document.getElementById("solution").value = a + "! =" + b;
    }
}