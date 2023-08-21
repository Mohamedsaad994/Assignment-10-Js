var mail = document.getElementById('mail');
var txt = document.getElementById('txt');
var pass = document.getElementById('pass');
var sign = document.getElementById('sign');
var warn = document.getElementById('warn');
var nameRule = document.getElementById('name-valid');
var mailRule = document.getElementById('mail-valid');
var passRule = document.getElementById('pass-valid')



var userData;

if(localStorage.getItem('DatafUser') == null){
    userData =[]
}else{
    userData = JSON.parse(localStorage.getItem('DatafUser'))
}
function signup(){
    warn.innerHTML='';
    warn.classList.replace('text-success','text-danger');
    if(isExist())return;        
    if(mailValidation() === true && nameValidation() === true && passValidation() === true && isExist()=== false){
        var fromUser ={
            userName:txt.value,
            userEmail:mail.value,
            userPass:pass.value
        }
        userData.push(fromUser);
        localStorage.setItem('DatafUser',JSON.stringify(userData));
        reset();
        window.location.replace("index.html")
        return;
    } else if(mail.value === '' || pass.value === '' || txt.value === ''){
        warn.innerHTML='All inputs is required'
    }else{
        warn.innerHTML='incorrect email or password'
    }
}


function isExist(){
    for(let i = 0; i < userData.length; i++){
        if(userData[i].userName == txt.value || userData[i].userEmail == mail.value){
            warn.innerHTML='Please Try Another Email Or Username'
            return true
        }
    }
    return false
}

function reset(){
    txt.value='',
    mail.value='';
    pass.value='';
}



var inputs = document.querySelectorAll('.form-login input');

for(i=0;i<inputs.length;i++){
    inputs[i].addEventListener('keyup',function(){
        if(nameValidation() === true && mailValidation() === true && passValidation() === true){
            warn.innerHTML='';
            warn.innerHTML='Success';
            warn.classList.replace('text-danger', 'text-success')
        }
    })
}


function mailValidation(){
    var mailRegx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mailfUser = mail.value;
    if(mailRegx.test(mailfUser)){
        mail.classList.add("is-valid");
        mail.classList.remove("is-invalid");
        mailRule.classList.replace('d-block','d-none')
        return true;
    }else{
        mail.classList.add("is-invalid");
        mail.classList.remove("is-valid");
        mailRule.classList.replace('d-none','d-block')
        return false
    }
}
function nameValidation(){
    var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var namefUser = txt.value;
    if(nameRegex.test(namefUser)){
        txt.classList.add("is-valid");
        txt.classList.remove("is-invalid");
        nameRule.classList.replace('d-block','d-none')
        return true;
    }else{
        txt.classList.add("is-invalid");
        txt.classList.remove("is-valid");
        nameRule.classList.replace('d-none','d-block')
        return false;
    }
}
function passValidation(){
    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var passfUser = pass.value;
    if (passRegex.test(passfUser)){
        pass.classList.add("is-valid");
        pass.classList.remove("is-invalid");
        passRule.classList.replace('d-block','d-none')
        return true;
    }else{
        pass.classList.add("is-invalid");
        pass.classList.remove("is-valid");
        passRule.classList.replace('d-none','d-block')
        return false
    }
}



