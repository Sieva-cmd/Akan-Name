var myFunction = function () {

    var inputDay = document.getElementById('exampleInputDay').value;
    var inputMonth = document.getElementById('exampleInputMonth').value;
    var inputYear = document.getElementById('exampleInputYear').value;
    var gender = document.querySelector('input[ name = "Gender"]:checked').value;

    if (inputDay <= 0 || inputDay > 31) {
        alert("invalid date");

    } else if (inputMonth <= 0 || inputMonth > 12) {
        alert("invalid month!!");
    } else if (!inputYear.match(/^\d\d\d\d$/)) {
        alert("invalid year!");
    } else {


        var calculation = function (inputDay, inputMonth, inputYear) {
            var inputDay = document.getElementById('exampleInputDay').value;
            var inputMonth = document.getElementById('exampleInputMonth').value;
            var inputYear = document.getElementById('exampleInputYear').value;

            var dd = parseInt(inputDay);
            var mm = parseInt(inputMonth);
            var cc = parseInt(inputYear.slice(0, 2));
            var yy = parseInt(inputYear);


            var result = (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
            var day = Math.ceil(result);

            var gender = document.querySelector('input[name ="Gender"]:checked').value;
            if (gender === "female") {
                var name
                switch (day) {
                    case 0:
                        name = "Akosua";
                        break;
                    case 1:
                        name = "Adwoa";
                        break;
                    case 2:
                        name = "Abenaa";
                        break;
                    case 3:
                        name = "Akua";
                        break;
                    case 4:
                        name = "Yaa";
                        break;
                    case 5:
                        name = "Afua";
                        break;
                    case 6:
                        name = "Ama";
                        break;

                }

            }
            else {
                switch (day) {
                    case 0:
                        name = "Kwasi";
                        break;
                    case 1:
                        name = "Kwando";
                        break;
                    case 2: name = "kwabena";
                        break;
                    case 3: name = "kwaku";
                        break;
                    case 4: name = "Yaw";
                        break;
                    case 5: name = "Kofi";
                        break;
                    case 6: name = "Kwame";
                        break;

                }
            }document.getElementById("error").innerHTML = ("Your Akan name is " +  name);



        }
        calculation();
    }

}