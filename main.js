function chegirma(foiz) {
    return function(sum) {
        return sum - (sum * foiz / 100);
    }
}

const onFoizliChegirma = chegirma(20)
console.log(onFoizliChegirma(500))