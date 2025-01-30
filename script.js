function guessNumber() {
    let maxNum = 100
    let minNum = 1
    let stepCounter = 0
    let firstComputerNum = Math.floor(100 * Math.random())
    let secondComputerNum
    console.log(`Первый компьютер загадал число ${firstComputerNum}`)
    while (secondComputerNum !== firstComputerNum) {
        stepCounter++
        secondComputerNum = parseInt((maxNum + minNum) / 2)
        console.log(`Попытка ${stepCounter}, второй компьютер пробует число ${secondComputerNum} в диапазоне ${minNum} - ${maxNum}`)

        if(secondComputerNum < firstComputerNum) {
            console.log('Компьютер 1: Больше')
            minNum = secondComputerNum
        } else if(secondComputerNum > firstComputerNum) {
            console.log('Компьютер 1: Меньше')
            maxNum = secondComputerNum
        } else {
            console.log(`Второй компьютер угадал, это число ${secondComputerNum}, количество попыток: ${stepCounter}`)
        }
    }
}

guessNumber()