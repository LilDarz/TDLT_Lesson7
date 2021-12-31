
function checkEvenNumber() {
    let myInput = document.getElementById("num");
    let checkNumber = Number(myInput.value);
    if (checkNumber % 2 == 0) {
        alert("Đây là số chẵn");
    } else {
        alert("Đây là số lẻ");
    }
}
