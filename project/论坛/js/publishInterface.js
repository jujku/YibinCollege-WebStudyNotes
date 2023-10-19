let publish = document.querySelector("#publish")


// publishimg.addEventListener("change", function (e) {
//     const file = publishimg.files[0]
//     console.log(file);
// })

publish.addEventListener("click", function (e) {
    const formData = new FormData();
    const winename = document.querySelector("#winename").value
    const winetext = document.querySelector("#winetext").value
    const base_liquor = document.querySelector("#base_liquor").value
    const formualations = document.querySelector(".formualationin")
    let formulationbefore = []
    for (let i = 0; i < formualations.children.length; i++) {
        let name = formualations.children[i].children[0].value
        let value = formualations.children[i].children[2].value
        formulationbefore.push('"' + name + '":' + '"' + value + '"')
    }
    let formualation = '{' + formulationbefore.join(",") + '}'


    formData.append("file", publishimg.files[0])
    formData.append("winename", winename)
    formData.append("formulation", formualation)
    formData.append("base_liquor", base_liquor)
    formData.append("winetext", winetext)

    // 判断是否登录
    if (Authorization == null) {
        alert("你没有登录！")
        return;
    }
    // 图片类型
    if (["image/png", "image/jpg", "image/jpeg"].indexOf(publishimg.files[0].type) < 0) {
        alert("图片格式只能为png,jpg,jpeg!")
        return;
    }
    // 判断是否合乎规则 酒名 简介 配方
    if (winename.length < 1 || winename.length > 20) {
        alert("酒名应在1-20字！")
        return;
    }
    if (winetext.length < 1 || winetext.length > 200) {
        alert("简介应在1-200字！")
        return;
    }
    if (formualation.length < 1 || formualation.length > 200) {
        alert("配方应在1-200字！")
        return;
    }

    axios({
        method: "post",
        url: "http://localhost:5000/publish",
        headers: {
            Authorization: Authorization,
        },
        data: formData,
        responseType: 'json'
    })
        .then(function (response) {
            alert(response.data.message)
        })
})