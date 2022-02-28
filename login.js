const username=document.getElementById("name");
const pwd=document.getElementById("pwd");
const btn=document.getElementById("btn");
const err1=document.querySelector(".error1");
const err2=document.querySelector(".error2");
const msg=document.querySelector(".success-msg")
const modal=document.querySelector(".modal")
const close=document.querySelector(".close")
const validation=()=>{
    let errors={}
    let checks=true
    let patterns=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    let check=patterns.test(pwd.value)
    if(username.value===""){
        errors.username="please fill the username";
        err1.innerHTML=errors.username;
        username.classList.add("error-class")
    }
    else{
        err1.innerHTML=""
        pwd.classList.remove("error-class")
        checks=true
    }
    if(pwd.value===""){
        errors.password="please fill the password";
        err2.innerHTML=errors.password
        pwd.classList.add("error-class")
    }
    else if(check===false){
        errors.password="use one character and numbers"
        err2.innerHTML=errors.password
        pwd.classList.add("error-class")
    }
    else{
        err2.innerHTML=""
        checks=true
        pwd.classList.remove("error-class")
    }
    if(Object.keys(errors).length!==0){
        console.log(Object.keys(errors).length)
        checks=false
    }
    return checks
}

const handleSubmit=()=>{
    let check=validation()
    let usernames="manimaran"
    let password="Mani@1999"
    if(check===true){
        msg.style.display="block"
        setTimeout(function() { msg.style.display="none"}, 3000);
     if(username.value===usernames && password===pwd.value){
         console.log("success")
     }
     else{
         modal.style.display="block"
     }
    }  
    else{
        console.log("error")
    }
}
username.addEventListener("focus",function(e){
    err1.innerHTML=""
    username.classList.remove("error-class")
})
pwd.addEventListener("focus",function(e){
    err2.innerHTML=""
    pwd.classList.remove("error-class")
})
btn.addEventListener("click",function(e){
    e.preventDefault()
    handleSubmit()
})
modal.addEventListener("click",function(e){
    modal.style.display="none";
})