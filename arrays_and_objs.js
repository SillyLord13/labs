/* Lab: write the code requested by lines marked //T
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};


console.log('ISS Latitude: ',iss_location.iss_position.latitude)
console.log('ISS Longitude: ',iss_location.iss_position.longitude)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};



//code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHS = 1.1787
console.log(rates)


//  if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
function currencyExchange(oldCurrency){
    let newCurrency = rates.AUD
    return newCurrency * oldCurrency
}
console.log('100 Euros is equal to ',currencyExchange(100).toFixed(2) , 'in AUD.')

//  code to identify the currency symbol that has the highest exchange rate compared to Euros.
function compareToEuro(euro){
    var big = rates.AUD;
    let bigCode = ''
    for (let code in rates){
        let currency = rates[code]
        if (currency > euro) {
            if (currency > big)
                big = currency
                bigCode = code
        }
    }
    return `${bigCode} with a exchange rate of ${big}`

}
console.log('Compared to the Euro: ', compareToEuro(1))



/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
];

//print Gary Oldman's cat's name
oldCat = cats_and_owners[1]
console.log(oldCat.cat)
// Add object with Taylor swift and her cat Meredith to the array
swiftCat = {name: 'Taylor Swift', cat: 'Meredith'}
cats_and_owners[4] = swiftCat
//a loop to print each cat owner, and their cat's name, one per line forEach style.
cats_and_owners.forEach(function (object){
    console.log(object)
})




/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */
let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
};


//print the full name of the Literature Nobel laureate.
let prizes = nobel_prize_winners_2017.prizes
literature = prizes[3]
let literatureWinners = literature.laureates
details = literatureWinners[0]
console.log('The nobel prize for literature was',details.firstname,details.surname)

//print the ids of each of the Physics Nobel laureates.
chemInfo = prizes[0]
let chemLaurates = chemInfo.laureates
chemLaurates.forEach(function (element){
    console.log(element.id)
})

//print the names of all of the prize categories
for(let i = 0; i < prizes.length; i++){
    console.log(prizes[i].category)
}

//print the total number of prize categories
console.log(prizes.length, 'prize categories')

//counts the total number of laureates from 2017.
let totalLaureates = []
for(let i = 0; i < prizes.length; i++){
    prizes[i].laureates.forEach(function (a){
        totalLaureates.push(a)
    })
}
console.log(totalLaureates.length,'noble prizes were given out in 2017')
