function calculSommeEntiers(firstInt:number, lastInt:number) {
    var total = 0
    
    for (let i = firstInt; i <= lastInt; i++) {
       total += i
    }

    return total
}

function calculMoyenne(liste:Array<number>) {
    var average = 0

    for (let i = 0; i < liste.length; i++) {
        const element = liste[i];
        average += element
    }

    return average/liste.length
}

function getMultiple(int:number) {
    var tab = []
    
    for (let i = 0; i <= 100; i++) {
        if (i % int === 0) {
            tab.push(i)
        }
    }

    return tab
}

function calculSommeEntierCommuns(firstArray:Array<number>, secondArray:Array<number>) {
    var tab = []

    for (let i = 0; i < firstArray.length; i++) {
        const firstElem = firstArray[i];
        
        for (let index = 0; index < secondArray.length; index++) {
            const secondElem = secondArray[index];
            
            if (firstElem == secondElem) {
                tab.push(firstElem)
            }
        }
    }

    return tab
}

// RUN tsc calcul-boucle.ts && node calcul-boucle.js

console.log(calculSommeEntiers(1, 10))
// 55

const liste = [1.0, 5.5, 9.9, 2.8, 9.6]
console.log(calculMoyenne(liste))
// 5.76

console.log(calculSommeEntierCommuns(getMultiple(3), getMultiple(5)))
// [0, 15, 30, 45, 60, 75, 90]