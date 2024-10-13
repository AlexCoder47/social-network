export const required = value => {
    if (value) {return undefined}
    return "Field is required"
}

export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) {return `Max length is ${maxLength} symbols`}
    if (value.length == 0) {return `Nothing in form`}
    return undefined
}