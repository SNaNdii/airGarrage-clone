let arr=JSON.parse(localStorage.getItem("arr")) || []
console.log(arr)
document.querySelector("button").addEventListener("click",myFunc);

function myFunc(){
    let name=document.querySelector("#LoginEmail").value
    // console.log(name)
    let pass=document.querySelector("#LoginPass").value
    // console.log(pass);
    let logged=false
    arr.map((ele)=>{
        if (ele.Email==name && ele.pass==pass)
        logged=true
        console.log(ele)
        window.location.href="index.html";
        // else{
        //     alert("Wrong Email or Password")
        
        // }
    })
    if (logged==false){
        (alert("Wrong Email or Password"))
        window.location.href="login.html";
    }
    // let getemail=localStorage.getItem("email");
    // console.log(getemail);

    // if( name==localStorage.getItem("email") && pass==localStorage.getItem("password")){
    //     window.location.href="index.html"
    // }
    // else if (name!=localStorage.getItem("email")){
    //     alert("Wrong Email")
    // }
    // else {
    //     alert("Wrong Password")
    // }

//    alert ("OTP Send")
}