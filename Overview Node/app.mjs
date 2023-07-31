// this is the main app module

//weather data app

//global module
import * as  readline from 'node:readline';  //permite sa citesti date pe care le introduce userul itneractiv in consola,fisiere,alte surse
import { stdin as input, stdout as output } from 'node:process'; // constine tot ce tine de procesul de rulare a applicatiei,
//stdin  - citim din consola
//stdout - printam in consola


//custom, local module - pe teritoriul app
import { data_week } from "./data.mjs";
             
//cream un obiect prin care putem face schimb de date cu consola
const io = readline.createInterface({input, output})

// io.on('line', day_number => {
//     console.log( day_number , typeof day_number)
// })

                                        //ceea ce va fi introdus de la tastatura, va nimeri aici ca string
io.question('Choose the day (1..7): ', (day_number, day_name) => {
        // console.log( day_number , typeof day_number)
        // console.log( day_name , typeof day_name)

        //Hw1: what if the user inputs the day name--->"Monday"
        //Hw2*: what if the user inputs a range ---> 1..3, "Monday".."tuesday"  task asemanator de la teste

        //hint1:use the data type check
        //hint2: use string processing

        //find algorithm
        data_week.forEach( (day, index) => {
            if( index + 1 == +day_number ){   //|| typeof day_name == "string" 
                console.log(`[${day.date}]:${day.temp}`  )
            }
            if( day.name == day_name ){
                console.log(`[${day.date}]:${day.temp}` )
            }
        });
        io.close()
    })



// data_week.forEach(day => {
//      console.log(`[${day.date}]:${day.temp}`  )
    
// });


//interaction

