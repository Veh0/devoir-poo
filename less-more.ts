import { randomInt } from "crypto";

var stdin = process.openStdin()

const INT = Math.floor(Math.random() * Math.floor(100))
//console.log(INT)
var win = 0


    stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    switch (true) {
        case parseInt(d) > INT:
            console.log("C'est moins")
            break;
    
        case parseInt(d) < INT:
            console.log("C'est plus")
            break;

        case parseInt(d) == INT:
            console.log("You win !")
            break;
    }
    
  });


