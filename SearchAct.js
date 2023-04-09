
var students = [  { name: "Habiba Ihab", ID: 201210119, level: "2", status: "active" },  { name: "Maryam Ayman", ID: 2021000, level: "2", status: "active" },  { name: "Roaa Emad", ID: 20210358, level: "2", status: "active" },  { name: "Rana Taha", ID: 20210068, level: "2", status: "inactive" }];

function searchStudent() {
  var name = document.getElementById("name").value;
  var result = document.getElementById("result");
  var tableHtml = "";
  var found = false;

  for (var i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase().includes(name.toLowerCase()) && students[i].status == "active") {
      found = true;
      tableHtml += "<tr><td>" + students[i].name + "</td><td>" + students[i].ID + "</td><td>" + students[i].level + "</td></tr>";
    }
  }

  
  if (found) {
    result.innerHTML = "<table><thead><tr><th>Name</th><th>ID</th><th>Level</th></tr></thead><tbody>" + tableHtml + "</tbody></table>";
  } else {
    result.innerHTML = "No active students with similar names found.";
  }
}

