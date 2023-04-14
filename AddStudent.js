function validate() {
    let Checkname = document.getElementById("name").value;
    let Checkid = document.getElementById("id").value;
    let Checkgpa = document.getElementById("gpa").value;
    let CheckEmail = document.getElementById("email").value;
    let Checkdate = document.getElementById("dob").value;
    let CheckPhone = document.getElementById("phone").value;
    let level = document.getElementById("level").value;
    let dep = document.getElementById("dep").value;
    let gender = document.getElementById("gender").value;
    let status = document.getElementById("status").value;
    if(Checkname == "" || Checkid == "" || Checkgpa == "" || CheckEmail == "" || Checkdate == "" 
    || CheckPhone == "" || level == "" || dep == "" || gender == "" || status == ""){
        return false;
    }
    else{
        const regex2 = /^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$/;
        if (!regex2.test(Checkname)) {
            alert("Invalid Name, Please enter your full name.");
            return false;
        }
        
        if (Checkid.length != 8) {
            alert("Invalid ID, Please Enter Valid ID");
            return false;
        }
        const regex3 = /^([0-3](\.[0-9]{1,2})?|4(\.0{1,2})?)$/;
        if (!regex3.test(Checkgpa)) {
            alert("Invalid GPA, Please Enter Valid GPA");
            return false;
        }
        const regex = /^[0-9]+@stud.uni.edu.eg$/;
        if (!regex.test(CheckEmail)) {
            alert("Invalid Email, Please Enter Valid Email");
            return false;
        }
        let inputdate = new Date(Checkdate);
        let currentdate = new Date()
        if (inputdate > currentdate) {
            alert("Invalid Date, Please Enter Valid Date");
            return false;
        }
        
        if (CheckPhone.length != 11 || CheckPhone[0] != 0 || CheckPhone[1] != 1) {
            alert("Invalid Mobile Number, Please Enter Valid Mobile Number");
            return false;
        }
        if(dep != "General" && (level == "Level 1" || level == "Level 2")){
            alert("Invalid Department, Levels below 3 must be General");
            return false;
        }
        return true;
    }
}
function submitForm(event) {
    event.preventDefault(); 
    let info = validate();
    if (info) {
        let form = document.getElementById("myForm");
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
        form.reset(); 
    }
}

function SaveStudent() {
    let form = document.getElementById("myForm");
    form.addEventListener("submit", submitForm);
}
