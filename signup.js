const username=document.getElementById("name");
const surname=document.getElementById("surname");
const email=document.getElementById("email");
const pwd=document.getElementById("pwd");
const phno=document.getElementById("phno")
const btn=document.querySelector(".signup-btn");
const err1=document.querySelector(".error1-box")
const err2=document.querySelector(".error2-box")
const err3=document.querySelector(".error3-box")
const err4=document.querySelector(".error4-box")
const err5=document.querySelector(".error5-box")
const msg= document.querySelector(".success-msg")
const validation=()=>{
    let errors={}
    let check=true
    let mailPattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    let pwdPattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    let mailCheck=mailPattern.test(email.value)
    let pwdCheck=pwdPattern.test(pwd.value)
    if(username.value==="" || surname.value===""){
        errors.username="please fill the field"
        err1.innerHTML=errors.username;
        err2.innerHTML=errors.username;
        err5.innerHTML=errors.username;
        username.classList.add("error-class")
        surname.classList.add("error-class")
        phno.classList.add("error-class")
    }
    else{
        err1.innerHTML=""
        err2.innerHTML=""
        err5.innerHTML=""
        check=true
    }
    if(email.value===""){
        errors.email="please fill the field"
        err3.innerHTML=errors.email
        email.classList.add("error-class")
    }
    else if(!mailCheck){
        errors.email="please fill the correct email"
        err3.innerHTML=errors.email
        email.classList.add("error-class")
    }
    else{
        err3.innerHTML=""
        check=true
    }
    if(pwd.value==="")
    {
        errors.password="please fill the field"
        err4.innerHTML=errors.password
        pwd.classList.add("error-class")
    }
    else if(!pwdCheck){
        err4.innerHTML="please fill the correct password"
        pwd.classList.add("error-class")
    }
    else{
        err4.innerHTML=''
        check=true
    }
    if(Object.keys(errors).length!==0){
        check=false
    }
    return check
}
const handleSubmit=()=>{
    let check=validation()
    console.log(check)
    if(check===true){
        msg.style.display="block"
       setTimeout(function() { msg.style.display="none"}, 3000);
    }
    else{
        console.log("error")
    }
}
username.addEventListener("focus",function(e){
    err1.innerHTML=""
    username.classList.remove("error-class")
})
surname.addEventListener("focus",function(e){
    surname.classList.remove("error-class")
    err2.innerHTML=""
})
pwd.addEventListener("focus",function(e){
    pwd.classList.remove("error-class")
    err4.innerHTML=""
})
phno.addEventListener("focus",function(e){
    phno.classList.remove("error-class")
    err5.innerHTML=""
})
email.addEventListener("focus",function(e){
    email.classList.remove("error-class")
    err3.innerHTML=""
})


btn.addEventListener("click",function(e){
    e.preventDefault();
    handleSubmit()
})
