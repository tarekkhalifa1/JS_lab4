///////////////////////////////////////// CONSTRUCTOR FUNCTION /////////////////////////////////////////

/*
function Person(fullName, money, sleepMode, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMode = "Happy";
    this.healthRate = "100%";
}

Object.assign(Person.prototype, {

    sleep(hours) {
        if (hours == 7) {
            return this.sleepMode = "Happy";
        } else if (hours < 7) {
            return this.sleepMode = "Tired";
        } else {
            return this.sleepMode = "Lazy";
        }
    },

    eat(meals) {
        switch (meals) {
            case 3:
                return this.healthRate = "100 %";
                break;
            case 2:
                return this.healthRate = "75 %";
                break;
            case 1:
                return this.healthRate = "50 %";
                break;
            default:
                return this.healthRate = "you should eat 3,2 or 1 meals";
        }
    },

    buy(items) {
        return this.money -= items * 10;
    }
});



const Tarek = new Person("Tarek Khalifa", 100);
console.log(Tarek);
console.log(Tarek.buy(5));

*/



///////////////////////////////////////// CLASS /////////////////////////////////////////



/*
class Person {
    constructor(fullName, money) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = "Happy";
        this.healthRate = "100%";
    }

    sleep(hours) {
        if (hours == 7) {
            return this.sleepMode = "Happy";
        } else if (hours < 7) {
            return this.sleepMode = "Tired";
        } else {
            return this.sleepMode = "Lazy";
        }
    }

    eat(meals) {
        switch (meals) {
            case 3:
                return this.healthRate = "100 %";
                break;
            case 2:
                return this.healthRate = "75 %";
                break;
            case 1:
                return this.healthRate = "50 %";
                break;
            default:
                return this.healthRate = "you should eat 3,2 or 1 meals";
        }
    }

    buy(items) {
        return this.money -= items * 10;
    }
}

const Tarek = new Person("Tarek Khalifa", 200);
console.log(Tarek);
// console.log(Tarek.sleep(10));

*/


///////////////////////////////////////// Objects Linking to Other Objects (OLOO) /////////////////////////////////////////

/*

const Person = {
    init(fullName, money, sleepMode, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = "Happy";
        this.healthRate = "100%";
    },


    sleep(hours) {

        if (hours == 7) {
            return this.sleepMode = "Happy";
        } else if (hours < 7) {
            return this.sleepMode = "Tired";
        } else {
            return this.sleepMode = "Lazy";
        }

    },

    eat(meals) {
        switch (meals) {
            case 3:
                return this.healthRate = "100 %";
                break;
            case 2:
                return this.healthRate = "75 %";
                break;
            case 1:
                return this.healthRate = "50 %";
                break;
            default:
                return this.healthRate = "you should eat 3,2 or 1 meals";
        }
    },


    buy(items) {
        return this.money -= items * 10;
    }
}



const Tarek = Object.create(Person);
Tarek.init("Tarek Khalifa", 500);
console.log(Tarek);
// console.log(Tarek.eat(2));

*/

///////////////////////////////////////// Factory Function /////////////////////////////////////////

/*
function person(fullName, money, sleepMode, healthRate) {
    return {
        fullName,
        money,
        sleepMode,
        healthRate,
        sleep(hours) {
            if (hours == 7) {
                return this.sleepMode = "Happy";
            } else if (hours < 7) {
                return this.sleepMode = "Tired";
            } else {
                return this.sleepMode = "Lazy";
            }
        },
        eat(meals) {
            switch (meals) {
                case 3:
                    return this.healthRate = "100 %";
                    break;
                case 2:
                    return this.healthRate = "75 %";
                    break;
                case 1:
                    return this.healthRate = "50 %";
                    break;
                default:
                    return this.healthRate = "you should eat 3,2 or 1 meals";
            }
        },

        buy(items) {
            return this.money -= items * 10;
        }
    }
};


const Tarek = person("Tarek Khalifa", 100);
console.log(Tarek);
// console.log(Tarek.sleep(5));

*/