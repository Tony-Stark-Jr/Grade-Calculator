
"use strict"

const calcy = () => {
    let english = document.getElementById('english').value
    let nepali = document.getElementById('nepali').value
    let math = document.getElementById('math').value
    let science = document.getElementById('science').value
    let social = document.getElementById('social').value
    let optmath = document.getElementById('optmath').value
    let eph = document.getElementById('eph').value
    let education = document.getElementById('education').value
    let grades = " ";

    let totalGrades = parseFloat(english) + parseFloat(nepali) + parseFloat(math) + parseFloat(science) + parseFloat(social) + parseFloat(optmath) + parseFloat(eph) + parseFloat(education);


    let perc = (totalGrades / 800) * 100;



    if (perc >= 89 && perc <= 100) {
        grades = 'A+';
    }
    else if (perc <= 89 && perc >= 79) {
        grades = 'A'
    }
    else if (perc <= 79 && perc >= 69) {
        grades = 'B+'
    }
    else if (perc <= 69 && perc >= 59) {
        grades = 'B'
    }
    else if (perc <= 59 && perc >= 49) {
        grades = 'C+'
    }
    else if (perc <= 49 && perc >= 39) {
        grades = 'C'
    }
    else {
        grades = 'Try Again!'
    }

    if (perc => 39) {
        document.getElementById('showData').innerHTML = `Out of 800 your total is ${totalGrades} and percentage is ${perc}%.Your grade is ${grades}. You are Pass`;
    }
    else {
        document.getElementById('showData').innerHTML = `Out of 800 your total is ${totalGrades} and percentage is ${perc}%. Your grade is ${grades}. You are Fail`;
    }
}


