
/* Used for Exercise 1*/
function validate()
{
    //taking in passwords entered by user
    var password1 = document.getElementById("first").value;
    var password2 = document.getElementById("second").value;

    if(password1 != password2)//shows error if the passwords don't match
    {
        alert("Error. Passwords do not match.");
    }
    else if(password1.length < 8 || password2.length < 8)//shows error if the password is too short
    {
        alert("Error. Please enter at least 8 characters.");
    }
    else//notifies user the password passed inspection
        //clears input fields
    {
        alert("Password confirmed.");

        document.getElementById("first").value = "";
        document.getElementById("second").value = "";
    }

}
/*End of exercise 1*/
/*Used for Exercise 2*/


/*End of exercise 2*/
