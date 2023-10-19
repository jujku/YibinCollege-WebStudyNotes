var calculatorClick = {
    //保存输入的数字和符号
    number: [],
    numberClick: numberClick,
    operatorClick: operatorClick,
    equalClick: equalClick,
    cleanClick: cleanClick
}  /* 计算对象 */

function numberClick(value) {
    var val = document.getElementById("output").value;  //获得显示框里面的值
    if (value == "0" && val == "0") {
        return;
    }
    // 显示框为0 输入为0时无效
    if (val == "0") {
        document.getElementById("output").value = value;
        // 如果显示框里面 为 0 在现实框里面显示对应字符
    } else {
        document.getElementById("output").value = val + value
        // 在显示框里面显示对应的字符
    }
}

function operatorClick(value) {
    var val = document.getElementById("output").value;
    //判断是否输入两次运算符
    if (val[val.length - 1] == " ") {
        return;
    }
    // 显示运算符
    document.getElementById("output").value = val + " " + value + " ";
}

function equalClick() {
    // 分割出数组
    number = document.getElementById("output").value.split(" ");
    // 乘除
    for (var index = 0; index < number.length; index++) {
        if (number[index] == "*" || number[index] == "/") {
            if (number[index + 1] == undefined) {
                number[index + 1] = 1;
            }
            if (number[index] == "*") {
                var index_num = Number(index);
                var firstNum = Number(number[index_num - 1]);
                var secondNum = Number(number[index_num + 1]);
                var result = firstNum * secondNum;
                number.splice(index_num - 1, 3, result)
            }
            if (number[index] == "/") {
                var index_num = Number(index);
                var firstNum = Number(number[index_num - 1]);
                var secondNum = Number(number[index_num + 1]);
                var result = firstNum / secondNum;
                number.splice(index_num - 1, 3, result)
            }
            index--;
        }
    }


    for (var index = 0; index < number.length; index++) {
        if (number[index] == "+" || number[index] == "-") {
            if (number[index] == "+") {
                var index_num = Number(index);
                var firstNum = Number(number[index_num - 1]);
                var secondNum = Number(number[index_num + 1]);
                var result = firstNum + secondNum;
                number.splice(index_num - 1, 3, result)
            }
            if (number[index] == "-") {
                var index_num = Number(index);
                var firstNum = Number(number[index_num - 1]);
                var secondNum = Number(number[index_num + 1]);
                var result = firstNum - secondNum;
                number.splice(index_num - 1, 3, result)
            }
            index--;
        }
    } document.getElementById("output").value = number[0];
}

function cleanClick() {
    document.getElementById("output").value = "";
}

// function cleanClick() {
//     document.getElementById("out put")
// }