let countdown = function (e) {
    sendcommentbtn.removeEventListener("click", countdown)
    sendcommentbtn.removeEventListener("click", sendcommentfunc)
    // sendcommentbtn.style.backgroundColor = "grey"
    time = 30
    sendcommentbtn.innerHTML = time
    timer = setInterval(function () {
        time -= 1
        sendcommentbtn.innerHTML = time
        if (time <= 0) {
            clearInterval(timer)
            sendcommentbtn.addEventListener("click", sendcommentfunc)
            sendcommentbtn.addEventListener("click", countdown)
            // getcaptcha.style.backgroundColor = ""
            sendcommentbtn.innerHTML = "评论"
        }
    }, 1000)
}
sendcommentbtn.addEventListener('click', countdown)