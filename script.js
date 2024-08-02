const calculate = () => { 

    let marks1 = document.getElementById("marks1s").value; 
    let marks2 = document.getElementById("marks2s").value; 
    let marks3 = document.getElementById("marks3s").value; 
    let marks4 = document.getElementById("marks4s").value; 
    let marks5 = document.getElementById("marks5s").value; 
    let marks6 = document.getElementById("marks6s").value; 
    let marks7 = document.getElementById("marks7s").value; 
    let marks8 = document.getElementById("marks8s").value; 

    let grades = ""; 
    let totalgrades = 
	parseFloat(marks1) + parseFloat(marks2) + parseFloat(marks3) + parseFloat(marks4) + parseFloat(marks5) + 
    parseFloat(marks8) + parseFloat(marks7) + parseFloat(marks6) ;
    if (marks1== "" ||marks2== "" ||marks3== "" ||marks4== "" ||marks5== "" ||marks6== "" ||
        marks7== "" ||marks8== "" ) {alert( "Please enter all the fields"); }
        else{
  let percentage = (totalgrades / 800) * 100; 
if (percentage <= 100 && percentage >= 80) { 
	grades = "A"; 
} else if (percentage <= 79 && percentage >= 60) { 
	grades = "B"; 
} else if (percentage <= 59 && percentage >= 40) { 
	grades = "C"; 
} else { 
	grades = "F"; 
} 
let results="";
if (percentage>=40)
    results="Pass";
else
results="Fail";
document.querySelector("#gdtot").innerHTML=`Grand Total:${totalgrades}`; 
document.querySelector("#Percentage").innerHTML=`${percentage.toFixed(2)}`; 
document.querySelector("#grade").innerHTML=`${grades}`; 
document.querySelector("#passorfail").innerHTML=`${results}`; 
function numberToWords(number) {
    if (number === 0) {
        return "Zero";
    }

    const oneToNineteen = [
        "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];

    const tens = [
 "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    function convertBelowThousand(n) {
        if (n < 20) {
            return oneToNineteen[n - 1];
        } else if (n < 100) {
            return tens[Math.floor(n / 10)] + (n % 10 === 0 ? "" : " " + oneToNineteen[n % 10 - 1]);
        } else {
            return oneToNineteen[Math.floor(n / 100) - 1] + " hundred" + (n % 100 === 0 ? "" : " and " + convertBelowThousand(n % 100));
        }
    }

    if (number < 1000) {
        return convertBelowThousand(number);
    } else {
        return "Number out of range";
    }
}
const number1 = document.getElementById("marks1s").value;
    document.querySelector("#marksw1").innerHTML=`${numberToWords(number1)}`; 
    const number2 = document.getElementById("marks2s").value;
    document.querySelector("#marksw2").innerHTML=`${numberToWords(number2)}`; 
    const number3 = document.getElementById("marks3s").value;
    document.querySelector("#marksw3").innerHTML=`${numberToWords(number3)}`; 
    const number4 = document.getElementById("marks4s").value;
    document.querySelector("#marksw4").innerHTML=`${numberToWords(number4)}`; 
    const number5 = document.getElementById("marks5s").value;
    document.querySelector("#marksw5").innerHTML=`${numberToWords(number5)}`; 
    const number6 = document.getElementById("marks6s").value;
    document.querySelector("#marksw6").innerHTML=`${numberToWords(number6)}`; 
    const number7 = document.getElementById("marks7s").value;
    document.querySelector("#marksw7").innerHTML=`${numberToWords(number7)}`; 
    const number8 = document.getElementById("marks8s").value;
    document.querySelector("#marksw8").innerHTML=`${numberToWords(number8)}`; 
    document.querySelector("#totalw").innerHTML=`In Words:${numberToWords(totalgrades)}`; 
}
}