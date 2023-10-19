function anime(obj, target, delay, callback) { //callback回调函数
    clearInterval(obj.timer) //创建定时器先清除 防止多次触发叠加
    // let timer = setInterval(function () {
    obj.timer = setInterval(function () {  //不多占用空间并且每个对象有专属的定时器
        step = (target - obj.offsetLeft) / 10  //缓动
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        // console.log(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            if (callback) {
                callback()
            }
        }
        else { //加一个else防止已经到了target还要继续移动
            obj.style.left = obj.offsetLeft + step + "px"
            // console.log(2);
            // console.log(obj.offsetLeft);
        }
    }, delay)
}