// 放大镜
const container = document.querySelector(".container");
const mirror = document.querySelector(".mirror");
const bigImg = document.querySelector(".mirror img");

let sendcomment = document.querySelector("#sendbtn");

// 绑定container的鼠标移动事件
container.addEventListener("mousemove", (e) => {
  // 获取鼠标距离左侧和顶部的边界偏移值
  let x = e.clientX;
  let y = e.clientY;
  // 获取container距离左侧和顶部的边界偏移值
  let left = container.offsetLeft;
  let Top = container.offsetTop;
  // 获取放大镜（mirror）距离container的left和top，让放大镜居中鼠标
  let mirrorLeft = x - left - mirror.offsetWidth / 2;
  let mirrorTop = y - Top - mirror.offsetHeight / 2;

  mirror.style.left = mirrorLeft + "px";
  mirror.style.top = mirrorTop + "px";

  // 计算图片放大
  let bigImgLeft =
    ((mirrorLeft + mirror.offsetWidth / 2) / container.offsetWidth) *
      bigImg.offsetWidth -
    mirror.offsetWidth / 2;
  let bigImgTop =
    ((mirrorTop + mirror.offsetHeight / 2) / container.offsetHeight) *
      bigImg.offsetHeight -
    mirror.offsetHeight / 2;

  bigImg.style.left = -bigImgLeft + "px";
  bigImg.style.top = -bigImgTop + "px";
});

// 评论
sendcomment.addEventListener("click", function () {
  let comment = document.querySelector("#comment").value;
  let commentlist = document.querySelector(".comentlsit").innerHTML;
  console.log(comment);
  // console.log(1);
  let arr = [];
  arr.push(commentlist);
  arr.push(
    '<div class="comment"><div class="headimg"></div><div class="content"><p class="username">一个B站用户</p><p class="commentcontent">' +
      comment +
      '</p><p class="time">2021-12-12 22:29</p></div></div>'
  );
  document.querySelector(".comentlsit").innerHTML = arr.join("");
});

function data(response) {
  const comments = response;
  let arr = [];
  for (k in comments) {
    arr.push(
      '<div class="comment"><div class="headimg" style="background-image:url(' +
        comments[k].imgurl +
        ')"></div><div class="content"><p class="username">' +
        comments[k].username +
        '</p><p class="commentcontent">' +
        comments[k].content +
        '</p><p class="time">' +
        comments[k].time +
        "</p></div></div>"
    );
  }
  document.querySelector(".comentlsit").innerHTML = arr.join("");
}
