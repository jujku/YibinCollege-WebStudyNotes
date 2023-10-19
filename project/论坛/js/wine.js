let wineform = document.querySelector(".content").querySelector(".w")
let content = document.querySelector(".content").querySelector(".w")

let searchbtn = document.querySelector(".searchbtn")
let searchinput = document.querySelector(".searchinput")

axios({
    method: "get",
    url: "http://localhost:5000/wine",
    responseType: 'json'
})
    .then(function (response) {
        // console.log(response.data.data);
        let arr = []
        for (let k in response.data.data) {
            arr.push('<div class="wine" wineid='
                + response.data.data[k].id
                + '><div class="wineimg"><img src='
                + response.data.data[k].imgurl
                + ' alt=""></div><div class="textbox"><h2>'
                + response.data.data[k].winename
                + '</h2><div class="pbox"><p>'
                + response.data.data[k].winetext
                + '</p></div></div></div>')
        }
        wineform.innerHTML = arr.join("")

        for (let i = 0; i < content.children.length; i++) {
            content.children[i].addEventListener(
                "click", function (e) {
                    localStorage.setItem("wine_id", this.getAttribute('wineid'))
                    location.href = "./formulation.html"
                }
            )
        }
    })

searchbtn.addEventListener("click", function () {
    axios({
        method: "get",
        url: "http://localhost:5000/search",
        params: {
            title: searchinput.value,
        },
        responseType: 'json'
    })
        .then(response => {
            const wines = JSON.parse(response.data.data)
            let arr = []
            for (k in wines) {
                arr.push('<div class="wine" wineid='
                    + wines[k].wineid
                    + '><div class="wineimg"><img src='
                    + wines[k].imgurl
                    + ' alt=""></div><div class="textbox"><h2>'
                    + wines[k].winename
                    + '</h2><div class="pbox"><p>'
                    + wines[k].winetext
                    + '</p></div></div></div>')
            }
            wineform.innerHTML = arr.join("")

            for (let i = 0; i < content.children.length; i++) {
                content.children[i].addEventListener(
                    "click", function (e) {
                        localStorage.setItem("wine_id", this.getAttribute('wineid'))
                        location.href = "./formulation.html"
                    }
                )
            }
        })
})


let shortcut = document.querySelector(".shortcut")
for (let i = 0; i < shortcut.children.length; i++) {
    shortcut.children[i].addEventListener("mouseover", function () {
        shortcut.children[i].style.backgroundColor = 'rgb(231,200,162)'
    })
    shortcut.children[i].addEventListener("mouseout", function () {
        shortcut.children[i].style.backgroundColor = "bisque"
    })
    shortcut.children[i].addEventListener("click", function () {
        const type = this.innerHTML
        axios({
            method: 'get',
            url: "http://localhost:5000/type",
            params: {
                type: type,
            },
            responseType: 'json'
        })
            .then(response => {
                const wines = JSON.parse(response.data.data)
                let arr = []
                for (k in wines) {
                    arr.push('<div class="wine" wineid='
                        + wines[k].wineid
                        + '><div class="wineimg"><img src='
                        + wines[k].imgurl
                        + ' alt=""></div><div class="textbox"><h2>'
                        + wines[k].winename
                        + '</h2><div class="pbox"><p>'
                        + wines[k].winetext
                        + '</p></div></div></div>')
                }
                wineform.innerHTML = arr.join("")

                for (let i = 0; i < content.children.length; i++) {
                    content.children[i].addEventListener(
                        "click", function (e) {
                            localStorage.setItem("wine_id", this.getAttribute('wineid'))
                            location.href = "./formulation.html"
                        }
                    )
                }
            })
    })
}

