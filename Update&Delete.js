function CheckInfo1(){
    let trueinfo = true;
    let Checkid = document.getElementById("ID").value;
    if(Checkid.length != 8 ){
        trueinfo = false;
        alert("Invalid ID, Please Enter Valid ID");
    }
    let CheckE = document.getElementById("email").value;
    const regex1 = /^[0-9]+@stud.uni.edu.eg$/;
    if(!regex1.test(CheckE) && CheckE != ""){
        trueinfo = false;
        alert("Invalid Email, Please Enter Valid Email");
    }
    let Checkgpa = document.getElementById("gpa").value;
    if((Checkgpa < 0 || Checkgpa > 4) && Checkgpa != ""){
        trueinfo = false;
        alert("Invalid GPA, Please Enter Valid GPA");
    }
    let Checkn = document.getElementById("Name").value;
    const regex2 = /^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$/;
    if(!regex2.test(Checkn) && Checkn != ""){
        trueinfo = false;
        alert("Invalid Name, Please Enter Valid Name");
    }
    let CheckPhone = document.getElementById("phone").value;
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
function UpdateStudent(){
    let Students = JSON.parse(localStorage.getItem("Students"));
    let Studentid = document.getElementById("ID").value;
    let Studentgpa = document.getElementById("gpa").value;
    let Studentname = document.getElementById("Name").value;
    let Studentemail = document.getElementById("email").value;
    let Studentphone = document.getElementById("phone").value;
    let Studentlevel = document.getElementById("level").value;
    let StudentDob = document.getElementById("date").value;
    let StudentStatus = document.getElementById("status").value;
    let StudentGender = document.getElementById("gender");
    let Studentfound = false;
    for(let i = 0;i < Students.length;i++){
        if(Studentid == Students[i].ID){
            Studentfound = true;
            if(Studentgpa != ""){
                Students[i].GPA = Studentgpa;
            }
            if(Studentname != ""){
                Students[i].Name = Studentname;
            }
            if(Studentemail != ""){
                Students[i].Email = Studentemail;
            }
            if(Studentphone != ""){
                Students[i].PhoneNumber = Studentphone;
            }
            if(Studentlevel != ""){
                Students[i].Level = Studentlevel;
            }
            if(StudentDob != ""){
                Students[i].DateOfBirth = StudentDob;
            }
            if(StudentStatus != ""){
                Students[i].Status = StudentStatus;
            }
            if(StudentGender != ""){
                Students[i].Gender = StudentGender;
            }
        }
    }
    if(Studentfound){
        localStorage.setItem("Students", JSON.stringify(Students));
    }
    else{
        alert("There is no Student with this Id to be Updated")
    }
}
function DeleteStudent(){
    let Students = JSON.parse(localStorage.getItem("Students"));
    let Studentid = document.getElementById("ID2").value; 
    let Studentfound = false;
    for(let i = 0;i < Students.length;i++){
        if(Students[i].ID == Studentid){
            Students = Students.filter((element, index) => index != i);
            Studentfound = true;
            break;
        }
    }
    if(Studentfound){
        localStorage.setItem("Students", JSON.stringify(Students));
    }
    else{
        alert("There is no Student with this Id to be Deleted")
    }
}
