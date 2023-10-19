let regist = document.querySelector(".registbtn")
let getcaptcha = document.querySelector(".getcaptcha")
let login = document.querySelector(".loginbtn")

//点击发送邮件的函数
let sendcaptcha = function () {
    let email = document.querySelector(".email").value
    url = 'http://localhost:5000/user/captch/email?' + 'email=' + email
    let xhr = new XMLHttpRequest()
    xhr.responseType = "json"
    xhr.open("GET", url)
    xhr.send()
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                if (xhr.response.code === 200) {
                    alert("发送成功!请查收你的邮件.")
                }
            } else {
                alert("发送失败！")
            }
        }
    })
}
//给发送验证码按钮绑定事件
getcaptcha.addEventListener("click", sendcaptcha)


regist.addEventListener("click", function () {
    let username = document.querySelector("#username").value
    let captcha = document.querySelector(".writecaptcha").value
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    let confirmpassword = document.querySelector(".confirmpassword").value
    console.log(username);
    const formData = new FormData()
    formData.append("email", email)
    formData.append("captcha", captcha)
    formData.append("username", username)
    formData.append("password", password)
    formData.append("confirmpassword", confirmpassword)
    axios({
        method: 'post',
        url: "http://localhost:5000/user/register",
        data: formData,
        responseType: 'json'
    })
        .then(function (response) {
            if (response.data.code === 200) {
                alert("恭喜你！注册成功！")
                location.href = "./register.html"
            } else {
                alert("注册失败！\n1.用户名2-20字符\n2.密码6-20位\n3.密码与确认密码不同\n4.邮箱格式错误\n5.验证码错误\n6.邮箱已经被注册")
            }
        })
})

function sendlogin() {
    let email = document.querySelector(".loginemail").value
    let password = document.querySelector(".loginpassword").value
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)
    axios({
        method: "post",
        url: "http://localhost:5000/user/login",
        data: formData,
        responseType: 'json'
    })
        .then(function (response) {
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token)
            // localStorage.setItem
            alert(response.data.message)
            if (response.data.code === 200) {
                location.href = "./index.html"
            }
        })
}
login.addEventListener("click", sendlogin)