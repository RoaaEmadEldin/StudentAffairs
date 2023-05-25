
  
function validate(event) {
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
  
    if (Checkname == "" || Checkid == "" || Checkgpa == "" || CheckEmail == "" || Checkdate == "" || CheckPhone == "" || level == "" || dep == "" || gender == "" || status == "") {
      event.preventDefault();
      return false;
    } else {
      const regex2 = /^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$/;
      if (!regex2.test(Checkname)) {
        alert("Invalid Name, Please enter your full name.");
        event.preventDefault();
        return false;
      }
  
      if (Checkid.length != 8) {
        alert("Invalid ID, Please Enter Valid ID");
        event.preventDefault();
        return false    }
  
      const regex3 = /^([0-3](\.[0-9]{1,2})?|4(\.0{1,2})?)$/;
      if (!regex3.test(Checkgpa)) {
        alert("Invalid GPA, Please Enter Valid GPA");
        event.preventDefault();
        return false;
      }
  
      const regex1 = /^[0-9]+@stud.uni.edu.eg$/;
      let id = "";
      for (let i = 0; i < CheckEmail.length; i++) {
        if (CheckEmail[i] != "@") {
          id += CheckEmail[i];
        } else {
          break;
        }
      }
      if ((!regex1.test(CheckEmail)) || (id != Checkid)) {
        alert("Invalid Email, Please Enter Valid Email");
        event.preventDefault();
        return false;
      }
  
      let inputdate = new Date(Checkdate);
      let currentdate = new Date();
      if (inputdate > currentdate) {
        alert("Invalid Date, Please Enter Valid Date");
        event.preventDefault();
        return false;
      }
  
      if (CheckPhone.length != 11 || CheckPhone[0] != 0 || CheckPhone[1] != 1 || (CheckPhone[2] != 1 && CheckPhone[2] != 2 && CheckPhone[2] != 0 && CheckPhone[2] != 5)) {
        alert("Invalid MobileNumber, Please Enter Valid Mobile Number");
        event.preventDefault();
        return false;
      }
  
      if (dep != "General" && (level == "Level 1" || level == "Level 2")) {
        alert("Invalid Department, Levels below 3 must be General");
        event.preventDefault();
        return false;
      }
  
    //   // Check if student ID exists in the database
    //   $.ajax({
    //     url: "/members/",
    //     type: "POST",
    //     data: { student_id: Checkid },
    //     success: function (response) {
    //       if (response.exists) {
    //         alert("Student ID exists in the database!");
    //       } else {
    //         // Submit the form if everything is valid
    //         document.getElementById("myForm").submit();
    //       }
    //     },
    //   });
     // form.reset(); 
      return true;
    }
  }