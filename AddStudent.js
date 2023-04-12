function validate() {
    let trueinfo = true;
    let CheckEmail = document.getElementById("email").value;
    const regex = /^[0-9]+@stud.uni.edu.eg$/;
    if (!regex.test(CheckEmail) && CheckEmail != "") {
        trueinfo = false;
        alert("Invalid Email, Please Enter Valid Email");
    }

    let Checkid = document.getElementById("id").value;
    if (Checkid.length != 8) {
        trueinfo = false;
        alert("Invalid ID, Please Enter Valid ID");
    }

    let Checkgpa = document.getElementById("gpa").value;
    const regex3 = /^([0-3](\.[0-9]{1,2})?|4(\.0{1,2})?)$/;

    if (Checkgpa == "" || !regex3.test(Checkgpa)) {
        trueinfo = false;
        alert("Invalid GPA, Please Enter Valid GPA");
    }

    let Checkname = document.getElementById("name").value;
    const regex2 = /^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$/;
    if (!regex2.test(Checkname) && Checkname != "") {
        trueinfo = false;
        alert("Invalid Name, Please enter your full name.");
    }

    let CheckPhone = document.getElementById("phone").value;
    if ((CheckPhone.length != 11 || CheckE[0] != 0 || CheckE[1] != 1) && CheckPhone != "") {
        trueinfo = false;
        alert("Invalid Mobile Number, Please Enter Valid Mobile Number");
    }

    let Checkdate = document.getElementById("dob").value;
    let inputdate = new Date(Checkdate);
    let currentdate = new Date()
    if (inputdate > currentdate && Checkdate != "") {
        trueinfo = false;
        alert("Invalid Date, Please Enter Valid Date");
    }
    return trueinfo;
}

function SaveStudent(){
    let N = document.getElementById("name").value;
    let ID = document.getElementById("id").value;
    let L = document.getElementById("level").value;
    let D = document.getElementById("dep").value;
    let Gpa = document.getElementById("gpa").value;
    let Gen = document.getElementById("gender").value;
    let S = document.getElementById("status").value;
    let Ph = document.getElementById("phone").value;
    let Dob = document.getElementById("dob").value;
    let Em = document.getElementById("email").value;
    let newstudent = new Student(N, ID, Dob, S, Gpa, Gen, L, D, Em, Ph);
    Students.push(newstudent);
    localStorage.setItem('Students', JSON.stringify(Students));
}
function Process(){
    let success = false;
    if(validate()){
        SaveStudent();
        success = true;
    }
    return success;
}
