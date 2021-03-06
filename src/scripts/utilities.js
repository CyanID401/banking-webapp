export const insertItem = (array, item) => {
    let newArray = array.slice()
    newArray.splice(-1, 0, item)
    return newArray
}

export const removeItem = (array, id) => {
    return array.filter(item => item.id !== id)
}

export const removeKey = (obj, propToDelete) => {
    const { [propToDelete]: deleted, ...rest } = obj
    return rest
}

export const fixedFloat = (number, digits=2) => {
    return parseFloat(number).toFixed(digits)
}