function changeStatus(id) {
    var status = document.querySelector("tr:nth-child(" + id + ") td:nth-child(4)");
    if (status.classList.contains("active")) {
      status.classList.remove("active");
      status.classList.add("inactive");
      status.innerHTML = "Inactive";
    } else {
      status.classList.remove("inactive");
      status.classList.add("active");
      status.innerHTML = "Active";
    }
  }