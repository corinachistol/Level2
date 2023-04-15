// aka Array class   // bonus -drive "OOP number container"
// * OOP
// * callback 

class NumberContainer{
    //HW1:try to set initial values through contructor
    constructor(val_0, val_1, val_2) {
        this.val_0 = val_0  // v
        this.val_1 = val_1  // v
        this.val_2 = val_2  // v
        
    }

    get length () {
        if (this.val_0 == undefined){
            return 0
        } else if( this.val_1 == undefined){
            return 1
        }else if(this.val_2 == undefined){
            return 2
        }else{
            return 3
        }
    }
    //HW2: try to avoid anything else than number
    push(number){
        if (typeof number === "number" ) {
            if ( this.length == 0 )
            this.val_0 = number
            else if ( this.length == 1)
                this.val_1 = number
            else if ( this.length == 2)
                this.val_2 = number
            // dar in acelasi timp ocupa pozitia 3, daca dupa asta imediat faci push(3), nu mai permite
            else 
            debugger
            console.error("Container FULL!!!")
        } else {
            console.error("NOT ACCEPTED!!!")
        }
           
           
        
    }

    // forEach ( cb ) {
    //         // this works like a loop
    //     if ( this.length > 0) {
    //         cb(this.val_0)
    //     }
    //     if ( this.length > 1 ) {
    //         cb(this.val_1)
    //     }
    //     if ( this.length > 2 ) {
    //         cb(this.val_2)
    //     }
        
    // }

    forEachReverse ( cb ) {
        if(this.length-1 == undefined){
            cb(this.val_2)
        }
    }



    //HW3: try to do a forEachREverse (cb(val))
    //for each reverse care se misca de la celula 3 la prima

    reduce ( cb,initval ) {
        let acc = []
        //this works like a loop
        if ( this.length > 0) {
            //                     v
            //  <-----
            acc = cb(this.val_0, acc)
        }
        if ( this.length > 1 ) {
            acc = cb(this.val_1, acc)
        }
        if ( this.length > 2 ) {
            acc = cb(this.val_2, acc)
        }
        return acc
        
    }

}


/*
 container for max 3 number 
 ------------------------
 |                       |  < .push(number)
 | val_0   val_1  val_2  |
 |                       |
 |                       |  > length
 |                       |  > .forEach( cb( val ) )
 |                       |  > .reduce( cb( val, acc ) )
 -------------------------




*/