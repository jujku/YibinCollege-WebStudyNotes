let sendcommentbtn = document.querySelector("#sendcommentbtn")
console.log(sendcommentbtn);

const sendcommentfunc = function () {
    const comment = document.querySelector("#sendcommenttext").value
    const wine_id = localStorage.getItem("wine_id")

    const formData = new FormData()

    formData.append("content", comment)
    formData.append("wine_id", wine_id)

    if (Authorization == null) {
        alert("你没有登录！")
        return;
    }

    if (comment.length < 1 || comment.length > 200) {
        if (comment.length < 1) alert("不能为空！")
        if (comment.length > 200) alert("不能超过200字！")
        return;
    }

    axios({
        method: "post",
        url: "http://localhost:5000/sendcomment",
        headers: {
            Authorization: Authorization,
        },
        data: formData,
        responseType: "json"
    })
        .then(response => {
            alert(response.data.message)
            // 发布后获取评论
            getcomments()
        })
}

sendcommentbtn.addEventListener("click", sendcommentfunc)

let wine_id = localStorage.getItem("wine_id")
axios({
    method: 'get',
    url: "http://localhost:5000/formulation",
    params: {
        wine_id: wine_id,
    },
    responseType: "json"
})
    .then(function (response) {
        document.querySelector("#userdata").innerHTML = "发布人： " + response.data.data.author
        document.querySelector("#usertime").innerHTML = response.data.data.creat_time
        document.querySelector(".publishimgbtn").style.backgroundImage = "url(" + '"' + response.data.data.imgurl + '"' + ")";
        document.querySelector("#winename").value = response.data.data.winename
        document.querySelector("#winetext").value = response.data.data.winetext
        document.querySelector("#base_liquor").innerHTML = response.data.data.base_liquor
        const formulation = JSON.parse(response.data.data.formulation)
        let arr = []
        for (k in formulation) {
            arr.push('<div class="inin"><input readonly type = "text" id = "formualation_name" placeholder = "配料名" value = '
                + k
                + '><p>:</p><input readonly type="text" id="formualation_num" placeholder="用量" value = '
                + formulation[k]
                + '></div>')
        }
        document.querySelector('.formualationin').innerHTML = arr.join(" ")

    })
const getcomments = function () {
    axios({
        method: 'get',
        url: "http://localhost:5000/comment",
        params: {
            wine_id: wine_id,
        },
        responseType: 'json'
    })
        .then(response => {
            const comments = JSON.parse(response.data.data)
            let arr = ['<div class="shadow"></div>']
            for (k in comments) {
                console.log(k);
                arr.push('<div class="comment"><div class="commentuser"><p id="commentusername">'
                    + comments[k].username
                    + '</p><p id = "commenttime" > '
                    + comments[k].time
                    + '</p></div ><div class="commenttext"><p id="commenttext">'
                    + comments[k].content
                    + '</p></div ></div >')
            }
            document.querySelector('.commentslist').innerHTML = arr.join("")
        })
}
getcomments()