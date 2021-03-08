class User {
    name:string
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }
}

function bonjour(user:User) {
    var today = new Date
    var weekDays = [1, 2, 3, 4]
    console.log(today.getDay())

    switch(true) {
        case today.getHours() > 9 && today.getHours() < 18 && weekDays.indexOf(today.getDay()) >= 0:
            console.log("Bonjour " + user.getName())
        break;

        case (today.getHours() < 9 || today.getHours() > 18) && today.getDay() > 1 && today.getDay() < 5 :
            console.log("Bonsoir " + user.getName())
        break;
        
        case today.getHours() > 9 && today.getHours() < 18 && today.getDay() == 5:
            console.log("Bonjour " + user.getName() + ", c'est bientôt le week-end")
        break;

        default:
            console.log("Bon week-end " + user.getName())
        break;
    } 
}

const user = new User('Bob')

bonjour(user)