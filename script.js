function changeColorCon () {
    document.getElementById("con").style.backgroundColor = "#400506";
    document.getElementById("con").style.color = "#faebd7"
}

function changeColorInfo () {
    document.getElementById("info").style.backgroundColor = "#400506";
    document.getElementById("info").style.color = "#faebd7"
}

function changeColorBio () {
    document.getElementById("bio").style.backgroundColor = "#400506";
    document.getElementById("bio").style.color = "#faebd7"
}

function changeColorEdu () {
    document.getElementById("edu").style.backgroundColor = "#400506"
    document.getElementById("edu").style.color = "#faebd7"
}


function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
    }
    
    var y = document.forms["myForm"]["surname"].value;
    if (y == "") {
        alert("Last name must be filled out");
    }

    var a = document.forms["myForm"]["subject"].value; 
    var atposition=a.indexOf("@");  
    var dotposition=a.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=a.length){  
        alert("Please enter a valid e-mail address");    
    }

    var z = document.forms["myForm"]["subject"].value;
    if (z == "") {
        alert("Messsage must be filled out");
    }}
