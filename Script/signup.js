
document.querySelector("form").addEventListener("submit", submit)
    let arr=JSON.parse(localStorage.getItem("arr")) || []
    function submit(event) {
        event.preventDefault();
        let name = document.getElementById("firstname").value;
        let fullname = document.getElementById("LastName").value;
        let myEmail = document.getElementById("email").value;
        let mypass = document.getElementById("password").value;
        let obj = {
        firstname: name,
        lastname: fullname, 
        Email: myEmail,
        pass: mypass,
        }
    arr.push(obj);
    
    localStorage.setItem("arr", JSON.stringify(arr));
    window.location.href="login.html";
    document.getElementById("firstname").value="";
    document.getElementById("LastName").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    }
