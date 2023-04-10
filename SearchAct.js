
var students = [
    {Id: "1001", Firstname: "John",    Middlename: "James",    Lastname: "Smith", gpa: 3.2,level: 2,status: "Active",Department: "General",                 email: "john.smith@stud.uni.edu.eg",    phone: "01234567890",dob: "1999-05-17",gender: "Male"},
    {Id: "1002", Firstname: "Emily",   Middlename: "Grace",    Lastname: "Brown", gpa: 3.8,level: 3,status: "Active",Department: "Mechanical Engineering",  email: "emily.brown@stud.uni.edu.eg",   phone: "01111111111",dob: "2000-01-23",gender: "Female"},
    {Id: "1003", Firstname: "William", Middlename: "Thomas",   Lastname: "Jones", gpa: 3.1,level: 2,status: "Inactive",Department: "General",               email: "william.jones@stud.uni.edu.eg", phone: "01010101010",dob: "1998-11-30",gender: "Male" },
    {Id: "1004", Firstname: "Emma",    Middlename: "Rose",     Lastname: "Davis", gpa: 3.9,level: 4,status: "Inactive",Department: "Electrical Engineering",email: "emma.davis@stud.uni.edu.eg",    phone: "01234567891",dob: "2001-06-12",gender: "Female"},
    {Id: "1005", Firstname: "David", Middlename: "Alexander",Lastname: "Wilson",gpa: 3.7,level: 3,status: "Active",Department: "Computer Science",        email: "michael.wilson@stud.uni.edu.eg",phone: "01111111112",dob: "1999-03-18",gender: "Male"},
    {Id: "1006", Firstname: "Olivia",  Middlename: "Jane",     Lastname: "Lee",   gpa: 3.5,level: 3,status: "Active",Department: "Chemical Engineering",    email: "olivia.lee@stud.uni.edu.eg",    phone: "01010101011",dob: "2000-07-26",gender: "Female" },
    {Id: "1007", Firstname: "James",   Middlename: "Henry",    Lastname: "Taylor",gpa: 3.0,level: 2,status: "Inactive",Department: "General",               email: "james.taylor@stud.uni.edu.eg",  phone: "01234567892",dob: "1998-10-05",gender: "Male"},
    {Id: "1008", Firstname: "Jasmine", Middlename: "S.",       Lastname: "Lee",   gpa: 3.2,level: 2,status: "Active",Department: "General",                 email: "jasmine.lee@university.edu",    phone: "01225148846",dob: "1999-07-14",gender: "Female"},
    {Id: "1009", Firstname: "Alex",    Middlename: "R.",       Lastname: "Garcia",gpa: 3.8,level: 3,status: "Active",Department: "Biology",                 email: "alex.garcia@university.edu",    phone: "01015484844",dob: "1998-05-22",gender: "Male"},
    {Id: "1010", Firstname: "Jessica", Middlename: "L.",       Lastname: "Wang",  gpa: 3.5,level: 2,status: "Inactive",Department: "General",               email: "jessica.wang@university.edu",   phone: "01119526445",dob: "2000-03-07",gender: "Female"},
    {Id: "1011", Firstname: "Kevin",   Middlename: "T.",       Lastname: "Chen",  gpa: 3.1,level: 1,status: "Active",Department: "General",                 email: "kevin.chen@university.edu",     phone: "01125846533",dob: "1999-11-18",gender: "Male"},
    {Id: "1012", Firstname: "Samantha",Middlename: "E.",       Lastname: "Taylor",gpa: 2.9,level: 4,status: "Inactive",Department: "Sociology",             email: "samantha.taylor@university.edu",phone: "01000244849",dob: "1998-09-05",gender: "Female"},
    {Id: "1013", Firstname: "Magy", Middlename: "J.",       Lastname: "Brown", gpa: 3.7,level: 3,status: "Inactive",Department: "History",               email: "michael.brown@university.edu",  phone: "01121584597",dob: "1997-12-31",gender: "Male"},
    {Id: "1014", Firstname: "Ava",     Middlename: "M.",       Lastname: "Wilson",gpa: 3.9,level: 4,status: "Active",Department: "Chemistry",               email: "ava.wilson@university.edu",     phone: "01021548888",dob: "1999-04-02",gender: "Female"},
    {Id: "1015", Firstname: "David",   Middlename: "P.",       Lastname: "Lopez", gpa: 3.4,level: 2,status: "Active",Department: "General",                 email: "david.lopez@university.edu",    phone: "01212545524",dob: "1997-11-01",gender: "Male"},
    {Id: "1016", Firstname: "Olivia",  Middlename: "K.",       Lastname: "Davis", gpa: 3.6,level: 3,status: "Inactive",Department: "English",               email: "olivia.davis@university.edu",   phone: "01115499942",dob: "2001-12-26",gender:"Female"}  
];
function searchStudent() {
    var name = document.getElementById("name").value;
    if(name != ""){
        var result = document.getElementById("result");
        var tableHtml = "";
        var found = false;

        for (var i = 0; i < students.length; i++) {
            if (students[i].Firstname.toLowerCase()==name.toLowerCase() && students[i].status == "Active") {
            found = true;
            tableHtml += "<tr><td>" + students[i].Id + "</td><td>" + students[i].Firstname + "</td><td>" + students[i].Middlename + 
                         "</td><td>"+ students[i].Lastname + "</td><td>"+ students[i].gpa + "</td><td>"+ students[i].level +
                         "</td><td>"+ students[i].Department + "</td><td>"+ students[i].email + "</td><td>"+ students[i].phone + 
                         "</td><td>"+ students[i].dob + "</td><td>"+ students[i].gender + "</td></tr>";
            }
        }
        if (found) {
            result.innerHTML = "<table><thead><tr><th>ID</th><th>First Name</th><th>Middle Name</th><th>Last Name</th> <th>GPA</th><th>Level</th><th>Department</th><th>Email</th><th>Phone Number</th><th>Date of Birth</th><th>Gender</th></thead><tbody>" + tableHtml + "</tbody></table>";
        } 
        else {
            result.innerHTML = "No active students with similar names found.";
        }
    }
    
}

