function CheckInfo(){
    let trueinfo = true;
    let Checkid = document.getElementById("ID").value;
    if (Checkid.length < 8){
        let div = document.getElementById("CheckID");
        div.style.display = "block";
        div.innerText = "Invalid ID, Please Make Sure ID Consists Of 8 Numbers.";
        trueinfo = false;

    }
    return trueinfo;
}






// let Sub = document.getElementById("assignForm");
// let Checkid = document.getElementById("ID");

// Form.addEventListener("submit", function (event){
//     if (Checkid.value().length < 8){
//         Checkid.setCustomValidity("Invalid ID, Please Make Sure ID Consists Of 8 Numbers")
//     }
//     else{
//         Checkid.setCustomValidity("");
//     }
// });
    
    






// let errorMessage = "Invalid ID, Please Make Sure ID Consists Of 8 Numbers.";
// let errorElement = document.createElement("li");
// errorElement.innerText = errorMessage;
// errorElement.classList.add("error");

// let messageList = document.getElementById("messageList");
// messageList.innerHTML = ''; // Clear existing messages
// messageList.appendChild(errorElement);

// return false;
