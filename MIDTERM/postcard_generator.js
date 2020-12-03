//set up man card div
let postCard = document.getElementById("card-complete")

//set up variable for card image
var image = document.getElementById("img")

//set up canvas which will display user message
var canvas = document.getElementById("info-card")
canvas
let context = canvas.getContext("2d")

//get all button elements
let createBtn = document.getElementById("create-btn")
let sendBtn =  document.getElementById("send-btn")
let eraseBtn= document.getElementById("erase-btn")

//get all user input for the card
let fromNameInput = document.getElementById("from-name")
let toNameInput = document.getElementById("rec-name")
let toEmailInput = document.getElementById("rec-email")
let messageInput = document.getElementById("message")

//set up honest alert for send button
sendBtn.addEventListener('click', function (){
    alert(`Congratulations! You're card has been sent to ${toEmailInput.value}`)
})

//set up create button function for e-postcard
createBtn.addEventListener('click', function (){

    let fromName = fromNameInput.value
    let toName = toNameInput.value
    let toEmail = toEmailInput.value
    let message = messageInput.value

    errors = []

    if(!fromName){
        errors.push('Enter sender name')
    }
    if (!toName){
        errors.push('Enter receiver name')
    }
    if (!toEmail){
        errors.push('Enter receiver email')
    }
    if (!message || message.length > 50){
        errors.push('Enter a message for the card max 50 characters')
    }
    if (errors.length > 0){
        let errMsg = errors.join('\n')
        alert(errMsg)
        return
    } else {

        //grab image from the api and paste it on the left side of the card
        url = 'https://picsum.photos/400/500'
        image.src = url
        image.style.alignContent = "top right"
        postCard.style.border = "thick solid #000000"

        //get strings set up for the message
        let fromStr = `From: ${fromName}`
        let toNameStr = `To: ${toName}`
        let toEmailStr = `@ ${toEmail}`
        let msgStr = `${message}`

        //print the message of the postcard
        context.font = "15px Arial"
        context.fillStyle = "black"
        context.fillText(fromStr,10,20)
        context.fillText(toNameStr,10,45)
        context.fillText(toEmailStr,10,65)
        context.fillText(msgStr,50,100)
    }

})


eraseBtn.addEventListener('click', function (){
    //this deletes the image
    image.src = ""
    //clear all user entered data in the form
    let form = document.getElementById("info-form").reset()
    postCard.style.removeProperty("border")
    //this clears the info canvas
    context.clearRect(0,0,canvas.width,canvas.height)

})
