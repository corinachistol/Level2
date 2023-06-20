// facem legatura cu formularul din html
const formUpload = document.querySelector('#form-upload')

//facem legatura cu input-ul din formular "Choose file"
const inputFile = document.querySelector('#form-upload input') 

//facem legatura cu tag-ul img unde va fi afisata iamginea
const previewImg = document.querySelector('#form-upload img') 

let model = null

cocoSsd.load().then(loadedModel =>{
    model = loadedModel
    console.log(model)

})

const onUpload = (e) => {
    console.dir(inputFile)  // ne afiseaza ca obiect form input-ul
    // 1. get the file info
    let fileInfo = inputFile.files[0]
    console.log(fileInfo)

    // 2.convert to address
    let url = URL.createObjectURL(fileInfo)
    console.log(url)

    // 3. put the address into the img src attribute
    previewImg.src= url
    

    // 4. show the image element
    previewImg.style.display ="inline-block"

    // 5. detect obejects in our image
    setTimeout( ()=>{

        previewImg.width = previewImg.offsetWidth
        previewImg.height = previewImg.offsetHeigth
        
        model.detect(previewImg).then(predictions => {
            console.log('Predictions: ', predictions);
            for(let i = 0; i< predictions.length; i++) {
                if(predictions[i].class === "cat" && predictions[i].score >= 0.5) {
                    alert("This image upload was cancelled cause it contains CATS!")
                }
            }
        });
        
    }, 500)
}

// de fiecare data cind schimbam valoare inputului, apasam butonul sa adaugam o poza, fn onUpload se executa
inputFile.addEventListener('change', onUpload)


/*
    imga.jpd--> input ------> File() ---> Memory Operatiba
                                v                   |
                                v                   |
                                v                   |
                URL.createObjectURL(fileInfo)       |
        url<----------------------------------------



*/