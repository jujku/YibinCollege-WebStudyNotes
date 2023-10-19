let coverbtn = document.querySelector(".coverbutton")
let cover = document.querySelector(".cover")


coverbtn.addEventListener("click", function () {
    if (cover.offsetLeft == 300) {
        anime(cover, 0, 15, function () {
            coverbtn.innerHTML = "点我去登录"
        })
    } else if (cover.offsetLeft == 0) {
        anime(cover, 300, 15, function () {
            coverbtn.innerHTML = "点我去注册"
        })
    }
})

let countdown = function (e) {
    getcaptcha.removeEventListener("click", countdown)
    getcaptcha.removeEventListener("click", sendcaptcha)
    getcaptcha.style.backgroundColor = "grey"
    let time = 30
    getcaptcha.innerHTML = time
    timer = setInterval(function () {
        time -= 1
        getcaptcha.innerHTML = time
        if (time <= 0) {
            clearInterval(timer)
            getcaptcha.addEventListener("click", sendcaptcha)
            getcaptcha.addEventListener("click", countdown)
            getcaptcha.style.backgroundColor = ""
            getcaptcha.innerHTML = "获取验证码"
        }
    }, 1000)
}

getcaptcha.addEventListener('click', countdown)