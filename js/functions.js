 

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

var final = day + "/" + month + "/" + year ;


console.log("aca vamos");
console.log(final);

document.getElementById("fecha").innerText= final;

