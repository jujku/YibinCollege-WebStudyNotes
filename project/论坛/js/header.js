let usernameShow = document.querySelector('.username')
let online = document.querySelector(".online")
let offline = document.querySelector(".offline")
let exit = document.querySelector('.exitbtn')

// 判断是否登录
if (localStorage.getItem("token") == null) {
    Authorization = null
} else {
    Authorization = "Bearer " + localStorage.getItem('token')
}

//切换header最左边的登录状态
axios({
    method: "get",
    url: "http://localhost:5000/user/username",
    headers: {
        Authorization: Authorization,
    },
    responseType: 'json'
})
    .then(function (response) {
        if (response.data.code === 200) {
            offline.style.display = "none"
            online.style.display = "block"
            usernameShow.innerHTML = response.data.data.username
        } else if (response.data.code === 401) {
            offline.style.display = "block"
            online.style.display = "none"
        }
    })


exit.addEventListener("click", function () {
    localStorage.removeItem("token")
    location.href = "./register.html"
})

let gotopublish = document.querySelector("#gotopublish")

gotopublish.addEventListener("click", function (e) {
    if (Authorization == null) {
        e.preventDefault()
        alert("你没有登录！")
    }
})