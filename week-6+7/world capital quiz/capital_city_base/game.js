//grab all data from html
let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let reset = document.querySelector('#play-again')

//set up the page for fresh input from user
randomCountry(nameGenerator())

//compares the users typed answer to the correct asnwer dictated by the object requested from the API
submitButton.addEventListener('click', function (){
    let userAnswer = userAnswerElement.value
    //fetch request with a url thats generated through functions
    fetch(createURL(randomCountry(randCObj)))
        .then(res => res.json())
        .then(countryData => {
            console.log(countryData)
            //first array
            let lib1 = countryData[1]
            //getting country object from second array
            let lib2 = lib1[0]
            console.log('capital city: ',lib2.capitalCity)
            //get capital city from the object and compares to user input
            let trueCapCity = lib2.capitalCity
            //case insensitve
            if (userAnswer.toLowerCase() === trueCapCity.toLowerCase()){
                console.log('match')
                resultTextElement.innerHTML = 'Correct!'
            } else {
                resultTextElement.innerHTML= `Wrong. The capital of ${randCObj.name} is ${trueCapCity}`
            }
        }).catch( (err) =>{
            console.log('ERROR',err)
            alert('Error communicating with API',err)
    })

})

//resets the page with a new country and a blank input
reset.addEventListener('click', function (){
    userAnswerElement.value = ''
    resultTextElement.innerHTML = ''
    createURL(randomCountry(nameGenerator()))


})

//get information from pulled country object to be used in the url also displays country name
function randomCountry(randCObj){
    let randCode = randCObj.alpha2
    randomCountryElement.innerHTML = randCObj.name
    return randCode

}

//create usable url for fetch request to compare the capital city to users input
function createURL(code){
    return url = `https://api.worldbank.org/v2/country/${code}?format=json`
}

//picks a random country from array of countries
function nameGenerator(){
    return randCObj = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
}