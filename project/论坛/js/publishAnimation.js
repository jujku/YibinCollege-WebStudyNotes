let addformualation = document.querySelector("#addformualation");
let deletformualation = document.querySelector("#deletformualation");
let inin = document.querySelector(".inin");
let formualation = document.querySelector(".formualationin");

let btn = document.querySelector(".publishimgbtn");
let publishimg = document.querySelector("#publishimg");
// 给input:file添加样式
btn.addEventListener("click", function () {
  publishimg.click();
});

// 配料添加上限 10 个
addformualation.addEventListener("click", function () {
  if (formualation.children.length == 10) {
    alert("不能再添加了！");
  } else {
    let formualationClone = inin.cloneNode(true);
    formualation.appendChild(formualationClone);
  }
});
// 配料删除上限 10 个
deletformualation.addEventListener("click", function () {
  if (formualation.children.length == 1) {
    alert("不能再删除了！");
  } else {
    formualation.removeChild(
      formualation.children[formualation.children.length - 1]
    );
  }
});

//上传图片预览
publishimg.addEventListener("change", function (e) {
  let files = e.target.files;
  var reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = function (e) {
    src = e.target.result;
    btn.style.backgroundImage = "url(" + e.target.result + ")";
    btn.innerHTML = "";
  };
});
