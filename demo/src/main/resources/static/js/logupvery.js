var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

var email = document.getElementById("email");
var password = document.getElementById("password");
var phone = document.getElementById("phone");
var username = document.getElementById("username");

email.firstElementChild.onblur = function () {
    if (!reg.test(email.value)) {
        email.firstElementChild.placeholder = "邮箱格式错误";
        email.firstElementChild.className = "invalid";
        console.log("wrong");
    } else {
        email.className = "form";
        console.log("right");
    }

}
email.firstElementChild.onfocus = function(){
    email.firstElementChild.className = "";
    email.firstElementChild.placeholder = "邮箱";
}


username.firstElementChild.onblur = function () {
    console.log("hello");
    if (username.firstElementChild.value=="") {
       username.firstElementChild.className = "invalid";
       username.firstElementChild.placeholder = "用户名为空"
    }

}
username.firstElementChild.onfocus = function(){
    username.firstElementChild.className = "";
}


phone.firstElementChild.onblur = function () {
    if (phone.firstElementChild.value=="") {
        phone.firstElementChild.className = "invalid";
        phone.firstElementChild.placeholder = "电话号码为空";
    }

}
phone.firstElementChild.onfocus = function(){
    phone.firstElementChild.className = "";
    phone.firstElementChild.placeholder = "用户名电话号码"; 
}

password.firstElementChild.onblur = function () {
    if (password.firstElementChild.value=="") {
        password.firstElementChild.className = "invalid";
        password.firstElementChild.placeholder = "密码为空"
    }

}
password.firstElementChild.onfocus = function(){
    password.firstElementChild.className = "";
    password.firstElementChild.placeholder = "密码"
}

