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


// 2020年3月3日----理解
// 4.希尔排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
function shellSort(arr) {
    var len = arr.length;
    for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
        for (var i = gap; i < len; i++) {
            var j = i;
            var current = arr[i];
            while (j - gap >= 0 && current < arr[j - gap]) {
                 arr[j] = arr[j - gap];
                 j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}



// 2020年3月3日
// 4.归并排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var result = [];
 
    while (left.length>0 && right.length>0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
console.log(mergeSort([9,8,7,6,5,4,3,2,1]))