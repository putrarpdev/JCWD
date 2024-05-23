// console.log('Task 1')
// setTimeout(() => console.log('Task 2'), 3000)
// console.log('Task 3')


const tryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true
        if (success) {
            resolve("Success")
        } else {
            reject("Error")
        }
    }, 2000)
})

const asyncAwait = async () => {
    console.log("satu")
    await tryPromise
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        // .finally(() => console.log("finally done"))
    console.log("dua")
}
// asyncAwait()

const tryAndCatch = async () => {
    try {
        console.log("satu")
        const result = await tryPromise
        console.log(result)
        console.log("dua")
    } catch (error) {
        console.log(error)
    }
}
// tryAndCatch()

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/user")
        if (!response.ok) throw { message: "Error fetch" }
        const users = await response.json()
        console.log(users)
    } catch (error) {
        console.log(error)
    }
}
fetchData()