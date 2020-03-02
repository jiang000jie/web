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
// 2.选择排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
function selectionSort(arr) {
    let len = arr.length;
    let temp,minIndex;
    for (var i = 0; i < len - 1; i++) {
        minIndex=i;
        for (var j = i+1; j < len; j++) {
            if (arr[minIndex]>arr[j]) 
                minIndex=j;
        }
        temp = arr[i];        // 元素交换
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}



// 2020年3月2日
// 3.插入排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
function insertionSort(arr) {
    let len = arr.length;
    let current,preIndex;
    for (var i = 1; i < len; i++) {
        preIndex=i-1;
        current=arr[i];
        while(preIndex>=0&&current<arr[preIndex]){
            arr[preIndex+1]=arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1]=current;
    }
    return arr;
}
console.log(insertionSort([9,8,7,6,5,4,3,2,1]))


897654321