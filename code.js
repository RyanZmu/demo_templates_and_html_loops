                                          //Ask user for names until told to stop. When stopped, print to page.


/*  
1. Get name from user
-prompt
-show current names in prompt
2. Store names from user (variable)

3. display the name on the page
  - unordered list for displaying names
*/ 

let names = []
let newName = ""

function createPrompt () {
    let message = `Please enter a name. \n
    You have already entered the following names:\n`
    for (let i = 0; i < names.length; i +=1){
        let currentName = names[i] //saves time typng names[i] a bunch
        message += currentName + `\n`
    }
    message += `\n Enter "exit" or press cancel to stop.`
    return message  
}

function displayTitle () {
    document.write(`<h1>Template Literals Demo</h1>`)
}

function displayNames (arrayOfNames) {
         document.write(`<ul>`)
    for (let i = 0; i < arrayOfNames.length; i += 1){
        let currentName = arrayOfNames[i]
        document.write(`<li><strong>${currentName}</strong</li>`)
    }

    document.write(`</ul>`)
}

function renderPage () {
    displayTitle()
    displayNames(names)
}



while (newName !== null) {
    let promptMessage = createPrompt()  
    newName = prompt(promptMessage)
if (newName === 'exit'){
    newName = null 
} if (newName !== null && newName !== "") {
        names.push(newName) 
    }
    console.log ({newName},{names})
}


renderPage()