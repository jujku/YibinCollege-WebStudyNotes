let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let lunbotu = document.querySelector(".lunbotu")
let bannerimg = document.querySelector(".bannerimg")
let bannerdown = document.querySelector(".bannerdown")

let offwidth = lunbotu.offsetWidth; //轮播图宽度

lunbotu.addEventListener("mouseenter", function () {
    prev.style.display = "block"
    next.style.display = "block"
    clearInterval(autotimer) //当鼠标进入轮播图的时候停止自动播放
    autotimer = null
})
lunbotu.addEventListener("mouseleave", function () {
    prev.style.display = "none"
    next.style.display = "none"
    autotimer = setInterval(function () { //当鼠标离开轮播图的时候继续自动播放
        // alert("21")
        next.click();
    }, 2000)
})

for (let i = 0; i < bannerimg.children.length; i++) {
    let li = document.createElement("li")
    li.setAttribute("index", i)
    bannerdown.appendChild(li)
    li.addEventListener("click", function () {
        for (let i = 0; i < bannerdown.children.length; i++) {
            bannerdown.children[i].className = ""
        }
        this.className = "current"
        // let offwidth = lunbotu.offsetWidth;
        let index = this.getAttribute("index")
        circle = index
        num = index //num管理左右点击轮播图切换
        // console.log(index);
        anime(bannerimg, -index * offwidth, 10)
    })
    // 添加完后给小圆圈第一个加样式 表示被选中
    bannerdown.children[0].className = "current"
}

// 克隆第一张图片 实现无缝切换
let first = bannerimg.children[0].cloneNode(true)
bannerimg.appendChild(first)

let circle = 0
let num = 0
next.addEventListener("click", function () {
    num++
    if (num == bannerimg.children.length) { //实现无缝切换
        bannerimg.style.left = "0"
        num = 1
    }
    anime(bannerimg, -num * offwidth, 10)
    circle++
    if (circle == bannerdown.children.length) {
        circle = 0
    }
    for (let i = 0; i < bannerdown.children.length; i++) {
        bannerdown.children[i].className = ""
    }
    bannerdown.children[circle].className = "current"
})
prev.addEventListener("click", function () {
    num--
    if (num == -1) { //实现无缝切换
        num = bannerdown.children.length
        console.log(num);
        bannerimg.style.left = -num * offwidth + "px"
        num--
    }
    anime(bannerimg, -num * offwidth, 10)
    circle--
    console.log(circle);
    if (circle == -1) {
        circle = bannerdown.children.length - 1
    }
    for (let i = 0; i < bannerdown.children.length; i++) {
        bannerdown.children[i].className = ""
    }
    bannerdown.children[circle].className = "current"
})

// 自动播放
var autotimer = setInterval(function () {
    // alert("21")
    next.click();
}, 2000)
