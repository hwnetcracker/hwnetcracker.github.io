$(document).ready(function () {
    $(".btn").on('click', calculate);
    $("#warning").hide();
    $("#answer").hide();
});
function calculate(event) {
    $("#answer").hide();
    $("#warning").hide();
    var a = $(".a").val();
    var b = $(".b").val();
    var c = $(".c").val();
    var x1 = null;
    var x2 = null;
    function verify() {
        if ((a != "" && !isNaN(a)) &&
            (b != "" && !isNaN(b)) &&
            (c != "" && !isNaN(c)))
            return true;
    }
    function addToTable() {
        var newRow = document.createElement("tr");
        newRow.onclick = deleteTableRow;
        newRow.innerHTML = "<td>" + a + "</td><td>" + b + "</td><td>" + c + "</td><td>" + x1 + "</td><td>" + x2 + "</td>";
        $("tbody").append(newRow);
    }
    function printAnswer() {
        var d = Math.sqrt(b * b - 4 * a * c);
        var s = "";
        if (d < 0) {
            s = "Корней нет";
        }
        else if (d == 0) {
            x1 = -b / (2 * a);
            x2 = x1;
            s = "x=" + x1;
        }
        else {
            x1 = (-b + d) / (2 * a);
            x2 = (-b - d) / (2 * a);
            ;
            s = "x1=" + x1 + " x2=" + x2;
        }
        $("#answer").text(s);
        $("#answer").show();
    }
    if (!verify()) {
        $("#warning").show();
    }
    else {
        printAnswer();
        addToTable();
    }
}
function deleteTableRow() {
    $(event.currentTarget).remove();
}
