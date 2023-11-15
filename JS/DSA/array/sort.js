const data = [10, 6, 7, 2, 3, 5, 9, 16, 91, 22]
const buble_sort = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j] > data[j + 1]) {
                // console.log(data) //swap
                let swap = data[j]
                data[j] = data[j + 1]
                data[j + 1] = swap
            }
        }
    }
    return data
}
const buble_sort_res = buble_sort(data)
console.log(buble_sort_res)