let profileName = document.getElementById("Name");
let profileEmail = document.getElementById("Email");
let profilePass = document.getElementById("Pass");


let data = JSON.parse(localStorage.getItem("currUser"));

if(data.token){
    profileName.innerHTML = `FullName: ${data.Name}`;
    profileEmail.innerHTML = `Email: ${data.Email}`;
    profilePass.innerHTML = `Password: ${data.Password}`;
}
else{
    window.location.href = './index.html';
}

function Clear(){
    console.log("clicked");
    // document.getElementById("profileA").href = "/signup.html";
    // document.getElementById("profileA").click();
    window.location.href = "./index.html";
    localStorage.clear();
}
