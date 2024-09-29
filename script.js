document.getElementById('calculateBtn').addEventListener('click', function(){
    var date_input = document.getElementById('date-input');
    var final_date_input = date_input.value
    var  year = document.getElementById('year-number')
    var month = document.getElementById('month-number')
    var day = document.getElementById('day-number')

    var now = new Date()
    var dateOfBirth = new Date(final_date_input)
    var totalTime = now - dateOfBirth;

})
