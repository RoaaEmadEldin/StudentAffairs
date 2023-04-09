function CheckInfo1(){
    let trueinfo = true;
    let Checkid = document.getElementById("ID").value;
    if(Checkid.length != 8 ){
        trueinfo = false;
        alert("Invalid ID, Please Enter Valid ID");
    }
    let CheckE = document.getElementById("email").value;
    const regex = /^[0-9]+@stud.uni.edu.eg$/;
    if(!regex.test(CheckE) && CheckE != ""){
        trueinfo = false;
        alert("Invalid Email, Please Enter Valid Email");
    }
    let Checkgpa = document.getElementById("gpa").value;
    if((Checkgpa < 0 || Checkgpa > 4) && Checkgpa != ""){
        trueinfo = false;
        alert("Invalid GPA, Please Enter Valid GPA");
    }
    let Checkn = document.getElementById("Name").value;
    const nonLatinChars = /[^A-Za-z]/g;
    if(!regex.test(Checkn) && Checkn != ""){
        trueinfo = false;
        alert("Invalid Name, Please Enter Valid Name");
    }
    let CheckPhone = document.getElementById("number").value;
    if((CheckPhone.length != 11 || CheckE[0] != 0 || CheckE[1] != 1) && CheckPhone != ""){
        trueinfo = false;
        alert("Invalid Mobile Number, Please Enter Valid Mobile Number");
    }
    let Checkdate = document.getElementById("date").value;
    let inputdate = new Date(Checkdate);
    let currentdate = new Date()
    if(inputdate > currentdate && Checkdate != ""){
        trueinfo = false;
        alert("Invalid Date, Please Enter Valid Date");
    }
    return trueinfo;
}
function CheckInfo2(){
    let trueinfo = true;
    let Checkid = document.getElementById("ID2").value;
    if(Checkid.length != 8 ){
        trueinfo = false;
        alert("Invalid ID, Please Enter Valid ID");
    }
    return trueinfo;
}

