function calculSommeEntiers(firstInt, lastInt) {
    var total = 0;
    for (var i = firstInt; i <= lastInt; i++) {
        total += i;
    }
    return total;
}
function calculMoyenne(liste) {
    var average = 0;
    for (var i = 0; i < liste.length; i++) {
        var element = liste[i];
        average += element;
    }
    return average / liste.length;
}
function getMultiple(int) {
    var tab = [];
    for (var i = 0; i <= 100; i++) {
        if (i % int === 0) {
            tab.push(i);
        }
    }
    return tab;
}
function calculSommeEntierCommuns(firstArray, secondArray) {
    var tab = [];
    for (var i = 0; i < firstArray.length; i++) {
        var firstElem = firstArray[i];
        for (var index = 0; index < secondArray.length; index++) {
            var secondElem = secondArray[index];
            if (firstElem == secondElem) {
                tab.push(firstElem);
            }
        }
    }
    return tab;
}
console.log(calculSommeEntiers(1, 10));
var liste = [1.0, 5.5, 9.9, 2.8, 9.6];
console.log(calculMoyenne(liste));
console.log(calculSommeEntierCommuns(getMultiple(3), getMultiple(5)));
