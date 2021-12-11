var form = document.getElementById('form');
var inputDay = document.getElementById('exampleInputDay');
var inputMonth = document.getElementById('exampleInputMonth');
var inputYear = document.getElementById('exampleInputYear');
var display = document.getElementById('formGroupExampleInput');
var errorElement = document.getElementById('error');
//var btnSubmit = document.getElementById('btnSubmit');


form.addEventListener('submit', (e) => {
    let messages = []

    if (inputDay.value <= 0 || inputDay.value > 31) {
        messages.push(" please enter a valid day!!!");
    }

    if (inputMonth.value <= 0 || inputMonth.value > 12) {
        messages.push('please insert a valid month!!! ');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');

    }




});
