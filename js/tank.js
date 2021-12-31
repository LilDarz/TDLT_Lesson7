function goUp() {
    let top= parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = top - 19 + "px";
} 

function goDown() {
    let top= parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = top + 19 + "px";
} 
function goLeft() {
    let left= parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = left + 19 + "px";
} 
function goRight() {
    let left= parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = left - 19 + "px";
} 
if (condition) {
    
}