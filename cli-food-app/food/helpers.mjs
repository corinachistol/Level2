//menu functionality
export function printMenu (menu){
    menu.forEach(item => console.log(item.print())
    );
}

export function printMessage (message){
    console.log(`${message}  >> `)
}