function juftSonlar(n) {
    if (n > 100){
        return
    }
    if (n % 2 === 0){
        console.log(n)
    }
    juftSonlar(n + 1)
}

let number = 0
juftSonlar(number)
