// The one and only task in this article concerns accessing JSON data and using it in your page. JSON data about some mother cats and their kittens is available in sample.json. The JSON is loaded into the page as a text string and made available in the catString parameter of the displayCatInfo() function. Your task is to fill in the missing parts of the displayCatInfo() function to store:

// The names of the three mother cats, separated by commas, in the motherInfo variable.
// The total number of kittens, and how many are male and female, in the kittenInfo variable.
// The values of these variables are then printed to the screen inside paragraphs.


//json
const catString = '[{"name":"Lindy","breed":"Cymric","color":"white","kittens":[{"name":"Percy","gender":"m"},{"name":"Thea","gender":"f"},{"name":"Annis","gender":"f"}]},{"name":"Mina","breed":"Aphrodite Giant","color":"ginger","kittens":[{"name":"Doris","gender":"f"},{"name":"Pickle","gender":"f"},{"name":"Max","gender":"m"}]},{"name":"Antonia","breed":"Ocicat","color":"leopard spotted","kittens":[{"name":"Bridget","gender":"f"},{"name":"Randolph","gender":"m"}]}]'

const section = document.querySelector("section")

let para1 = document.createElement("p")
let para2 = document.createElement("p")


//let motherInfo = 'The mother cats are called ';
let motherNames = [];
let kittenInfo;
//let motherInfo

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
    .then(response => response.text() )
    .then(text => displayCatInfo(text) )

function displayCatInfo(catString){
    let total = 0;
    let male = 0;
    let female = 0;
    let kittens = []

    //Add you code here
    const catInfo = JSON.parse(catString)
    console.log(catInfo)
    

    catInfo.forEach( cat => {
        motherNames.push(cat.name)
        total += cat.kittens.length
        kittens.push(...cat.kittens)
    } )
    
    //let motherInfo = `The mother cats are called:${motherNames}`
    console.log(motherInfo)

    kittens.forEach(kitten => {
        if(kitten.gender === "m"){
            male++
        }else{
            female++
        }
    })

    kittenInfo = `The total number of kittens is:${total}, ${male} of them are male and ${female} are female `


    console.log(total)
    console.log(kittens)
    console.log(male)
    console.log(female)



   //raspunsul de pe MDN - https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/marking.md
    // for(i=0; i<catInfo.length; i++){
    //     for(const kitten of catInfo[i].kittens){
    //         total++
    //         if(kitten.gender === "m"){
    //             male++
    //         }
    //     }

    //     if(i < (catInfo.length-1) ){
    //         motherInfo += `${catInfo[i].name},`
    //     }else{
    //         motherInfo += `and ${catInfo[i].name}`
    //     }
    
    // }







    //Don't edit the code below
    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;

}

section.appendChild(para1);
section.appendChild(para2);
