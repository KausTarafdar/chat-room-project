export function getExactTime(datestring) {
    const data = new Date(datestring)
    const hours = doubleDigit(data.getHours())
    const minutes = doubleDigit(data.getMinutes())
    return `${hours}:${minutes}`
}

function doubleDigit(number) {
    return number.toString().padStart(2,"0")
}