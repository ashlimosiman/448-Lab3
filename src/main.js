/*
    Author: Ashli Mosiman
    Date Last Updated: Sept 19, 2016
    File Name: main.js
    Description: contains all javascript methods for the exercises
*/



/*Used overall*/

const display = new Display();
function changeView(view) {
  display.changeView(view);
}

/*End of overall*/
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
function nextPic()
{
    var imgSource = document.getElementById("slideshow").src;
    for(var i=imgSource.length-1; i>0; i--)
    {
        if(document.getElementById("slideshow").src.charAt(i) == 1)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img2.jpg";
            break;
        }
        else if(document.getElementById("slideshow").src.charAt(i) == 2)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img3.jpg";
            break;

        }
        else if(document.getElementById("slideshow").src.charAt(i) == 3)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img4.jpg";
            break;
        }
        else if(document.getElementById("slideshow").src.charAt(i) == 4)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img5.jpg";
            break;
        }
        else if(document.getElementById("slideshow").src.charAt(i) == 5)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img1.jpg";
            break;
        }
    }
}

function prevPic()
{
    var imgSource = document.getElementById("slideshow").src;
    for(var i=imgSource.length-1; i>0; i--)
    {
        if(document.getElementById("slideshow").src.charAt(i) == 1)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img5.jpg";
            break;
        }
        else if(document.getElementById("slideshow").src.charAt(i) == 2)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img1.jpg";
            break;

        }
        else if(document.getElementById("slideshow").src.charAt(i) == 3)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img2.jpg";
            break;
        }
        else if(document.getElementById("slideshow").src.charAt(i) == 4)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img3.jpg";
            break;
        }
        else if(document.getElementById("slideshow").src.charAt(i) == 5)
        {
            document.getElementById("slideshow").src = "../src/ex2_imgs/img4.jpg";
            break;
        }
    }
}

/*End of exercise 2*/
/*Used for exercise 4*/

function changeStyle()
{
    //retrieving values
    var brdrWdth = parseInt(document.getElementById("borderWidth").value);
    var rBrdr = parseInt(document.getElementById("borderRed").value);
    var gBrdr = parseInt(document.getElementById("borderGreen").value);
    var bBrdr = parseInt(document.getElementById("borderBlue").value);
    var rBckgnd = parseInt(document.getElementById("backgroundRed").value);
    var gBckgnd = parseInt(document.getElementById("backgroundGreen").value);
    var bBckgnd = parseInt(document.getElementById("backgroundBlue").value);
    var preview = document.getElementById("customizing");

    if(isNaN(brdrWdth) || isNaN(rBrdr) || isNaN(gBrdr) || isNaN(bBrdr) || !isValid(brdrWdth,rBrdr,gBrdr,bBrdr))
    {
        alert("Error. Invalid values for the border.");
    }
    else if(isNaN(rBckgnd) || isNaN(gBckgnd) || isNaN(bBckgnd) || !isValid(0,rBckgnd,gBckgnd,bBckgnd))
    {
        alert("Error. Invalid values for the background.");
    }
    else
    {
        preview.style.borderWidth = brdrWdth + "px";
        preview.style.borderColor = "rgb(" + rBrdr + "," + gBrdr + "," + bBrdr + ")";
        preview.style.backgroundColor = "rgb(" + rBckgnd + "," + gBckgnd + "," + bBckgnd + ")";
    }
}

function isValid(width,red,green,blue)
{
    if(red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255)
    {
        return false;
    }
    else
    {
        return true;
    }
}

/*End of exercise 4*/
