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
