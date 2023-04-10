function validate() {
    let trueinfo = true;

    let CheckEmail = document.getElementById("email").value;
    const regex = /^[0-9]+@stud.uni.edu.eg$/;
    if (!regex.test(CheckEmail) && CheckEmail != "") {
        trueinfo = false;
        event.preventDefault()
        alert("Invalid Email, Please Enter Valid Email");
    }
    let passsword = document.getElementById("Pass").value;
    let confirmPassword = document.getElementById("ppass").value;
    const strongPasswordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
    ;
    if (!strongPasswordRegex.test(passsword)) {
        trueinfo = false;
        event.preventDefault()
        alert("Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long");
    }
    if (passsword !== confirmPassword) {
        trueinfo = false;
        event.preventDefault()
        alert("Passwords do not match");}


    let Checkid = document.getElementById("ID").value;

    if (Checkid.length != 8) {
        trueinfo = false;
        event.preventDefault()
        alert("Invalid ID, Please Enter Valid ID");
    }

    let Checkgpa = document.getElementById("gpa").value;
    if ((Checkgpa < 0 || Checkgpa > 4) && Checkgpa != "") {
        trueinfo = false;
        event.preventDefault()
        alert("Invalid GPA, Please Enter Valid GPA");
    }
    let Checkname = document.getElementsByClassName("Name").value;
    const regex2 = /[^A-Za-z]/g;
    if (!regex2.test(Checkn) && Checkn != "") {
        trueinfo = false;
        alert("Invalid Name, Please Enter Valid Name");
    }
    let CheckPhone = document.getElementById("number").value;
    if ((CheckPhone.length != 11 || CheckE[0] != 0 || CheckE[1] != 1) && CheckPhone != "") {
        trueinfo = false;
        alert("Invalid Mobile Number, Please Enter Valid Mobile Number");
    }
    let Checkdate = document.getElementById("date").value;
    let inputdate = new Date(Checkdate);
    let currentdate = new Date()
    if (inputdate > currentdate && Checkdate != "") {
        trueinfo = false;
        alert("Invalid Date, Please Enter Valid Date");
    }


}
//Rana#2114
