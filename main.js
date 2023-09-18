// login valid

let subBtn=document.getElementById("sub");
let myForm=document.getElementById("my-form").onsubmit=function(){
    let name=document.getElementById("username").value;
    let email = document.getElementById("user-email").value;
    let password = document.getElementById("user-password").value;
    let sp=document.getElementById("my-sp").value;
let nameReg=/\w\d*/g //yasmeen20
let emailReg=/\w+\d*@\w+.com/g;//yasmeen2000@gmail.com
let validName= nameReg.test(name);
let validEmail =emailReg.test(email);

if(validName===false || validEmail===false){
return false;
}
return true;
}
