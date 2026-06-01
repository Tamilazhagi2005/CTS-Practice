// Phone Validation

function validatePhone(){

    let phone =
        document.getElementById("phone").value;

    if(phone.length < 10){

        alert("Invalid Phone Number");

    }

}

// Event Fee Display

function showFee(){

    let fee =
        document.getElementById("eventType").value;

    document.getElementById("fee").innerHTML =
        "Event Fee: ₹" + fee;

}

// Submit Form

function submitForm(){

    document.getElementById("outputMsg").innerHTML =
        "Registration Successful";

}

// Character Count

function countChars(){

    let text =
        document.getElementById("feedback").value;

    document.getElementById("charCount").innerHTML =
        text.length + " Characters";

}

// Video Ready

function videoReady(){

    document.getElementById("videoMsg").innerHTML =
        "Video Ready To Play";

}

// Geolocation

function findLocation(){

    navigator.geolocation.getCurrentPosition(

        function(position){

            document.getElementById("location").innerHTML =
                "Latitude: "
                + position.coords.latitude
                + "<br>Longitude: "
                + position.coords.longitude;

        },

        function(){

            alert("Location Access Denied");

        },

        {
            enableHighAccuracy:true,
            timeout:5000
        }

    );

}

// Before Unload

window.onbeforeunload = function(){

    return "Are you sure you want to leave?";

}