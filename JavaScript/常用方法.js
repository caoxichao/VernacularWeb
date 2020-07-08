/** 
 * @Qs:对数组[1, 2, 3, 4, 5, '6', 7, '8', 'a', 'b', 'z']进行乱序
 */
let temArr = [1, 2, 3, 4, 5, '6', 7, '8', 'a', 'b', 'z'];
temArr.sort(function () {
    return Math.random() > 0.5 ? -1 : 1
})

/**
 * @Qs：求一个数组内的最大值与最小值之差
 */
function MaxMinPlus(arr) {
    return Array.isArray(arr) ? Math.max.apply(Math, arr) - Math.min.apply(Math, arr) : console.log("传入的不是数组类型")
}