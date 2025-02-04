function sumNumericFields(obj) {
    let result = 0
    for(let i in obj) {
        if(Number(obj[i])) {
            result += obj[i]
        }
    }

    return result
}


const obj2 = {name: 'Vasya', friends: 5, likes: 19, projects: 7}

function sortFields(obj) {
    const sortArray = []
    const values = []
    for(let i in obj) {
        if(Number(obj[i])) {
            values.push(obj[i])
        }
    }
    const sortValues = values.sort((a, b) => b - a)
    for(let i of sortValues) {
        for(let j in obj) {
            if(i === obj[j]) {
                sortArray.push(j)
            }
        }
    }

    return sortArray
}
