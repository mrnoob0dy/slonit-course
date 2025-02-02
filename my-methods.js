const myArr = [1, 2, "str", true, 7, 10, "Moscow"];

function myIndexOf(arr, item, from = 0) {
    let count = -1;
    for (let i = from; i < arr.length; i++) {
        count++;
        if (arr[i] === item) {
            return count + from;
        }
    }
    return -1;
}

function myIncludes(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

function mySlice(arr, start = 0, end = arr.length) {
    const newArr = [];
    if (start >= 0) {
        for (let i = start; i < end; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    } else {
        for (let i = end + start; i < end; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
}
