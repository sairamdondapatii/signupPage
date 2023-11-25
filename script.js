const form=document.getElementById('form')
const uname=document.getElementById("uname")
const email=document.getElementById("email")
const password=document.getElementById("password")
const C_password=document.getElementById("C_password")
const tandC=document.getElementById("terms")

var isValidName=false
var isValidEmail=false
var isValidPassword=false
var isValidC_password=false
var isValidTCChecked=false
uname.addEventListener('keyup',checkusername)
email.addEventListener('keyup',checkemail)
password.addEventListener('keyup',checkpassword)
C_password.addEventListener('keyup',checkC_password)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validate()
})

function validate(){
    isValidName=false
    isValidEmail=false
    isValidPassword=false
    isValidC_password=false
    isValidTCChecked=false

    checkusername()
    checkemail()
    checkpassword()
    checkC_password()

    if(tandC.checked){
        setSuccesss(tandC)
        isValidTCChecked=true
    }
    else if(!tandC.checked){
        setError(tandC,"pls read terms and conditions and agree")
    }

    if(isValidName && isValidEmail && isValidC_password && isValidC_password && isValidTCChecked){
        form.submit()
    }
}
function setError(input,msg){
    let parent=input.parentElement;
    let small=parent.querySelector('small')
    small.innerText=msg
    parent.classList.add("error")
    parent.classList.remove("sucess")
}
function setSuccesss(input){
    let parent=input.parentElement
    parent.classList.add("sucess")
    parent.classList.remove("error")
}

function checkusername(){
    let unamevalue=uname.value.trim()
    if (unamevalue===""){
        setError(uname,'user name cannot be empty')
    }
    else if(uname.value.length<3){
        setError(uname,'user name can contain more than 3 charecters')
    }
    else{
        setSuccesss(uname)
        isValidName=true
    }
}
function checkemail(){
    let emailvalue=email.value.trim()
    if(emailvalue===""){
        setError(email,'email cannot be empty')
    }
    else{
        setSuccesss(email)
        isValidEmail=true
    }
}
function checkpassword(){
    let passwordvalue=password.value.trim()
    if(passwordvalue===""){
        setError(password,"password cannot be empty")
    }
    else if(passwordvalue.length<8){
        setError(password,"password should be min 8 charecters")
    }
    else{
        setSuccesss(password)
        isValidPassword=true
    }
}
function checkC_password(){
    let C_passwordvalue=C_password.value.trim()
    if (C_passwordvalue==""){
        setError(C_password," confirm password cannot be empty")
    }
    else if(C_passwordvalue.length<8){
        setError(C_password,"password should be min 8 charecters")
    }
    else{
        setSuccesss(C_password)
        isValidC_password=true
    }
}