console.log(generateVerificationCode())

function generateVerificationCode() {
    let number = Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
    return number
}