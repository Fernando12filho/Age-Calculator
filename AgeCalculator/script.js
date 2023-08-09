labelYear = document.getElementById("yearData");
labelMonth = document.getElementById("monthData");
labelDay = document.getElementById("dayData");

inputYear = document.getElementById("year");
inputMonth = document.getElementById("month");
inputDay = document.getElementById("day");

invalidYear = document.getElementById("invalidYear");
invalidMonth = document.getElementById("invalidMonth");
invalidDay = document.getElementById("invalidDay");








function calculator(day, month, year) {
    const date = new Date();

    let todayDay = date.getDate();
    let todayMonth = date.getMonth() + 1;
    let todayYear = date.getFullYear();

    if (errors(day, month, year) > 0) {
        console.log("inside if");
        return;
    }
    // Calculating years
    var birthYear = todayYear - year;

    // Calculating Months
    var birthMonth;
    if (todayMonth < month) {
        birthYear = birthYear - 1;
        birthMonth = (todayMonth - month) + 12;
    }
    if(todayMonth == month){
        birthMonth = 0;
    }
    else {
        birthMonth = todayMonth - month;
    }

    //Calculating Days
    var birthday;
    if (todayDay < day) {
        var previousMonthDays;
        if (todayMonth == 5 || todayMonth == 7 || todayMonth == 8 || todayMonth == 10 || todayMonth == 12) {
            previousMonthDays = 30;
        }
        if (todayMonth == 3) {
            previousMonthDays = 28;
        }
        else {
            previousMonthDays = 31;
        }

        birthMonth = birthMonth - 1;
        birthday = (todayDay - day) + previousMonthDays;
    }

    else {
        birthday = todayDay - day;
    }

    document.getElementById("purpleYear").innerHTML = birthYear;
    document.getElementById("purpleMonth").innerHTML = birthMonth;
    document.getElementById("purpleDay").innerHTML = birthday;

    invalidDay.style.display = "none";
    invalidMonth.style.display = "none";
    invalidYear.style.display = "none";
}



function errors(day, month, year) {

    console.log("inside function error");
    console.log("day: " + day);
    console.log("month: " + month);
    console.log("year: " + year);

    var y = 0;

    const date = new Date();
    let todayYear = date.getFullYear();


    if(day < 1 || day > 31){
        invalidDay.style.display = "contents"
        y = 1;
    }
    if(day > 28)
    {
        if(month == 2)
        {
            invalidDay.style.display = "contents"
            y = 1;
        }
    }
    if(day > 30)
    {
        if(month == 4 || month == 6 || month == 9 || month == 11){
            invalidDay.style.display = "contents";
            y = 1;
        }
    }


    if(month > 12 || month < 1)
    {
        invalidMonth.style.display = "contents";
        y = 1;
    }

    if(year > todayYear || year < 1)
    {
        invalidYear.style.display = "contents";
        y = 1;
    }



    return y;
}

function getInputOutput() {

    labelDay.style.display = "none";
    labelMonth.style.display = "none";
    labelYear.style.display = "none";

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;


    calculator(day, month, year);

}



