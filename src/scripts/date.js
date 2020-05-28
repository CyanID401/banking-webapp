const getDate = () => {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    return `${day}.${month}.${year}`
}

export default getDate
