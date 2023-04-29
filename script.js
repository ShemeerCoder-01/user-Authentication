let btn = document.getElementById("btn");
let profilePage = document.getElementById("profile");
let logbtn = document.getElementById("logbtn");




btn.addEventListener('click', () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let confPass = document.getElementById("confirmpass").value;
    if (name == '' || pass == '' || email == '' || confPass == '') {
        document.getElementById("msg").innerText = "All the fields are mandatory";
        document.getElementById("msg").style.color = "red";
        return;
    }
    if (pass != confPass) {
        document.getElementById("msg").innerText = "Password Mismatch!!!";
        document.getElementById("msg").style.color = "red";
        return;
    }
    let user = {
        Name: name,
        Password: pass,
        Email: email,
        token: tokenGenerator(),
    }

    localStorage.setItem("currUser", JSON.stringify(user));
    document.getElementById("msg").innerText = "Successfully Signed Up!";
    document.getElementById("msg").style.color = "green";

    setTimeout(() => {
        window.location.href = './profile.html';
    }, 1000);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("confirmpass").value = "";


});

let data = JSON.parse(localStorage.getItem("currUser"));
if (data.token != null) {
    // document.getElementById("signA").href = "/profile.html";
    // document.getElementById("signA").click();
    window.location.href = `./profile.html`;
} 
// else {
//     // document.getElementById("profileA").href = `signup.html`;
//     // document.getElementById("profileA").click();
//     window.location.href = `./index.html`;
//     localStorage.clear();
// }



function tokenGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < 16; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
}





