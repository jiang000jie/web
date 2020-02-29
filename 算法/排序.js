// https://www.cnblogs.com/onepixel/articles/7674659.html
// 2020年2月27日
// 1.冒泡排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
function bubbleSort(arr) {
    var len = arr.length;
    var temp;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


// 2020年2月28日
// 1.选择排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
function selectionSort(arr) {
    let len = arr.length;
    let temp,minIndex;
    for (var i = 0; i < len - 1; i++) {
        minIndex=i;
        for (var j = i+1; j < len; j++) {
            if (arr[i]>arr[j]) 
                minIndex=j;
        }
        temp = arr[i];        // 元素交换
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
console.log(selectionSort([9,8,7,6,5,4,3,2,1]))
// 9 8 7 6 5 4 3 2 1
// 1 8 7 6 5 4 3 2 9
// 1 2 7 6 5 4 3 8 9
// 1 2 3 6 5 4 7 8 9
// 1 2 3 4 5 6 7 8 9
