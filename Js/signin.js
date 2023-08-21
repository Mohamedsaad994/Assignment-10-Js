var log = document.getElementById('log');
var logMail = document.getElementById('logMail');
var logPass = document.getElementById('logPass');
var logWarn = document.getElementById('logWarn');
var identi = document.getElementById('identi');
var logMailRule = document.getElementById('logMail-valid')
var logPassRule = document.getElementById('logPass-valid')

var userData;


var username = localStorage.getItem('sessionUserName');

if(localStorage.getItem('DatafUser') == null){
    userData =[]
}else{
    userData = JSON.parse(localStorage.getItem('DatafUser'))
}
function logIn(){
    if(logMailValidation() === true && logPassValidation() === true){
        for (i=0;i<userData.length;i++){
            if(logMail.value === userData[i].userEmail && logPass.value === userData[i].userPass){
                localStorage.setItem('sessionUserName', userData[i].userName)
                window.location.replace("welcome.html");
            }else{
                logWarn.innerHTML='pleace sign up first';
            }
        }
    }else if(logMail.value === '' || logPass.value === ''){
        logWarn.innerHTML='All inputs is required';
    }else {
        logWarn.innerHTML='incorrect email or password'
    }
}

function displayusername(){
    identi.innerHTML=username
}


var inputs = document.querySelectorAll('.form-login input');

for(i=0;i<inputs.length;i++){
    inputs[i].addEventListener('keyup',function(){
        logMailValidation();
        
        logPassValidation();
            // warn.innerHTML='';
            // warn.innerHTML='Success';
            // warn.classList.replace('text-danger', 'text-success')
        
    })
}




function logMailValidation(){
    var mailRegx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mailfUser = logMail.value;
    if(mailRegx.test(mailfUser)){
        logMail.classList.add("is-valid");
        logMail.classList.remove("is-invalid");
        logMailRule.classList.replace('d-block', 'd-none')
        return true;
    }else{
        logMail.classList.add("is-invalid");
        logMail.classList.remove("is-valid");
        logMailRule.classList.replace('d-none', 'd-block')
        return false
    }
}

function logPassValidation(){
    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var passfUser = logPass.value;
    if (passRegex.test(passfUser)){
        logPass.classList.add("is-valid");
        logPass.classList.remove("is-invalid");
        logPassRule.classList.replace('d-block', 'd-none')
        return true;
    }else{
        logPass.classList.add("is-invalid");
        logPass.classList.remove("is-valid");
        logPassRule.classList.replace('d-none', 'd-block')
        return false
    }
}