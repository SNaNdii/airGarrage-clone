localStorage.setItem("email", "singhnandita73@gmail.com");
localStorage.setItem("password", "nandita")


document.querySelector("button").addEventListener("click",myFunc);

function myFunc(){
    let name=document.querySelector("#LoginEmail").value
    // console.log(name)
    let pass=document.querySelector("#LoginPass").value
    // console.log(pass);

    // let getemail=localStorage.getItem("email");
    // console.log(getemail);

    if( name==localStorage.getItem("email") && pass==localStorage.getItem("password")){
        window.location.href="index.html"
    }
    else if (name!=localStorage.getItem("email")){
        alert("Wrong Email")
    }
    else {
        alert("Wrong Password")
    }

//    alert ("OTP Send")
}