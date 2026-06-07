function rightone(answer2){
    alert("You selected : " + answer2);
}

function sumbitButton(){
let answer;
if(document.getElementById("ans1").checked) {
    answer = "Mumbai";
} 
else if(document.getElementById("ans2").checked) {
    answer = "Delhi";
}
else if(document.getElementById("ans3").checked) {
    answer = "Pune";
}
if(answer === "Delhi"){
    alert("Correct !");
}
else {
    alert("Worng !");
}
}