document.getElementById('calculateBtn').addEventListener('click', function(){

    var date_input = document.getElementById('date-input').value;
    var outputYear = document.getElementById('year-number')
    var outputMonth = document.getElementById('month-number')
    var outputDay = document.getElementById('day-number')

    if(!date_input) {
        alert('Plz enter a valid date of birth.')
        return;
    }

    var now = new Date()
    var dateOfBirth = new Date(date_input)
    
    if(now < dateOfBirth) {
        alert('Date of birth must be current date or earlier than current date.')
        return;
    }

    var totalTimeInMilliseconds = now - dateOfBirth;

    // var year = now.getFullYear() - dateOfBirth.getFullYear(); // We can use also use this instead of bottom.
    var year = Math.floor(totalTimeInMilliseconds / (1000*60*60*24*365.25));
    // var month = Math.floor(totalTime / (1000*60*60*24*30.44)); // We can use also use this instead of bottom.
    var month = now.getMonth() - dateOfBirth.getMonth();
    var day = now.getDate() - dateOfBirth.getDate();
    console.log(day)

    if (month < 0 || (month === 0 && day < 0)) {
        year--;
        month += 12; // Add 12 months to make up for the previous year
    }

    if (day < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Days in the previous month
        day += prevMonth;
        month--; // Here i decrement month means -1 form months
    }

    outputYear.textContent = year;
    outputMonth.textContent = month;
    outputDay.textContent = day;
})
