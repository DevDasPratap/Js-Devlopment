const ls = [5, 2, 4, 1, 10, 8, 9, 16, 91, 22]
function leanerSearch(arr, target) {
    if (arr.length <= 1) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            console.log(`Target ${arr[i]} found at index: ${i}`)
            return target
        }
    }
    return -1
}
// console.log(leanerSearch(ls, 10))

const users = [
    { username: 'pd', email: 'pd@gmail.com' },
    { username: 'das', email: 'das@gmail.com' },
    { username: 'dev', email: 'dev@gmail.com' },
    { username: 'pratap', email: 'pratap@gmail.com' },
    { username: 'pratapdas', email: 'pratapdas@gmail.com' },
]

function userExist(users, value) {
    for (let i = 0; i < users.length; i++) {
        if (users[i]['username'] === value) {
            return true
        }
    }
    return false
}

const res = userExist(users, 'pratap')
console.log(res)