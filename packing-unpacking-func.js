//packing and unpacking values & arrays-retrun func  --meet week6





/*
source                                  destination
 --------DATA------------------------------>
 packing                                unpacking
           v


----------func(parem1.parem2)------------
|                  v                    |
|                 unpacking             |
|                                       |
|                                       |
|                                       |
|       packing                         |
|           v                           |
|       return                          |
---------v-------------------------------
        DATA

Functia cind isi ia informatia de undeva , la intrare, ea de fapt e comsunator,  e destinatia unde trebuie sa ajunga acele date in argument.
 Functia cind isi termina jobul ei, prin returnul ei ea serveste drept sursa pentru alta functie.

*/


//usually in JS, data is packed in Array or Object

// Array - ordered & indexed collection.Valorile impachetate sunt omogene,uniforme.Conteaza ordinea si ai nevoie de index.
let arr = [300,100,200]

//Object - ordered key-value paired collection. Non uniforme data. Vrei sa lucrezi prin key mai mult
let obj = {
    b:300,
    a:100,
    c:200
}

function f(a,b,c){
    console.log(a,b,c)
}
//unpack the array. In cazul array-lui,spread-ul se foloseste cind apelam functia
f(...arr)  //-->300,100,200



//desctructuring
//In cazul obiectelor,spreadul se foloseate cind declaram functia, cind despachetam datele.
function f({b,c,a}){
    console.log(a,b,c)
}

f(obj)  //---> 100 300 200


let students = []

// student data
function getDataFromDB () {
    //...connect---> to DB
    //   query  <--- DB
    
    let names = ["John Doe", "Mary Poppins", "Pete A"]
    let grades = [       9.5,           9.0,      8.0 ]
    
    //HW2: find another method to concatenate this 2 arrays
    // [...names, ...grades]
    //return names.concat(grades)


    // return {
    //     names:names,
    //     grades: grades
    // }

    students = names.map( (name,index) => { 
        return  {
            name:name,
            grade: grades[index]
        }
    } )
    
    return students
}
getDataFromDB()

//create another funct
// selectTopStudents(students) 
//that will get the list of students
//and will return a list of students with grade >=9

//make it so selectTopStudents() <----getDataFromDB()


function selectTopStudents () {
    const topStudents = [...students]

    return topStudents.filter(student => student.grade >= 9.0 )

}
selectTopStudents()


