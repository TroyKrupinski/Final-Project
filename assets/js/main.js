"use strict";

function clearForm() {
    /*
     * this function replaces the text in text boxes with empty strings
     * and replaces the message area with an html <br>
     */
    $('#first-name').val('');
    $('#last-name').val('');
    $('#email-name').val('');
    $('#msg').html('<br>'); // minor violation of concerns, but okay for now
}

function sendData(fname, lname, ename) {
    //bring the message area in to report errors or "Sent!"
    let msgArea = document.getElementById("msg");

    $.ajax({
        url: 'processnames',
        type: 'POST',
        data: {fname: fname, lname: lname, ename: ename},
        success: function (data) {
            if(data != ""){
                clearForm();
                msgArea.innerHTML = "<h4 style = blue> Sent! Thank you " + fname + "!";
            }
        
        },
        error: function () {
            msgArea.innerHTML = "Server Error";
        }
    });

    return;
}

function validate() {
    var message = "";

    //bring the message area in to report errors
    let msgArea = document.getElementById("msg");

    //get the strings from the text boxes and trim them
    var fname = $('#first-name').val().trim();
    var lname = $('#last-name').val().trim();
    var ename = $('#email-name').val().trim()

    //put the trimmed versions back into the form for good iser experience (UX)
    $('#first-name').val(fname);
    $('#last-name').val(lname);
    $('#email-name').val(ename);

    //test the strings from the form and store the error messages
    if (fname === "") {
        message += "<h2 style ='color:blue;'>First name cannot be empty.</h2><br>";
    }

    if (lname === "") {
        message += "<h2 style ='color:blue;'>Last name cannot be empty.</h2><br>";
    }
    if (ename === "") {
        message += "<h2 style ='color:blue;'>Email cannot be empty.</h2><br>";
    }

    if (message === "") {
        // no errors, so send the data to the server
        console.log("calling ajax");
        console.log(1);
        sendData(fname, lname, ename);
    } else {
        // report errors if there are any
        console.log("errors");
        msgArea.innerHTML = message;
    }

    return;
}

/*
 * This is the jQuery docready method. It automatically executes when the DOM
 * is ready. You should always put handlers and other auto-executed code in
 * a docready function. It protects you from "race-conditions" when the JS
 * tries to execute before the DOM is complete.
 */
$(document).ready(function () {

    // event handler for the clear button
    $("#names-clear").click(function () {
        clearForm();
    });

    // event handler for the send button
    $("#names-send").click(function () {
        // only need to call validate. validate will call sendData
        validate();
    });

});
