f//Custom Logger

//remember the ref to old console
let _console = window.console

let console = {

    history: [],

    log: function (message, value) {
        //create a deep copy
        //acesta metodaa detaseaza obiectul curent de obiectul pastrat de noi ,
        let deepCopyOfValue = JSON.parse( JSON.stringify( value ) )
        _console.log(message, deepCopyOfValue)
        this.history.push(
            {
                "message": message,
                "value":deepCopyOfValue
            }
        )
    },
    //for compatibility with what the browser wants
    assert: function() {},

   cursor : function () {
      return this.history.indexOf({
           "message": mesage,
           "value":deepCopyOfValue
       })
   },
   
    //HW1:
    //complete the code of these methods,
    back: function () {
        let idx = this.history.indexOf( message ) - this.cursor
        debugger
        return this.history[idx]
    },
    forward: function () {}

    //                                   forward----->
    //                              <------back
    // history x------------+-------------+---------+-----x--->
    //          s                                       end
    // hint: use a cursor/ iterator  = variabila


}



////////////////
//SourceCode 
let arr=[1,2,3]
console.log("before",arr)
arr.pop()
console.log("after", arr)
arr.unshift(5)
console.log("after", arr)

//console.back() // sa faca  un pas in urma si sa-mi afiseze ce s-a intimplat acolo
//console.forward() // sa faca un pas inainte - analog
