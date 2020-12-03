//set up api url
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

//get inputs for iss lat and long from html
let issLat= document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let issTime = document.querySelector('#iss-time')

// creating the marker for map
let issMarker
let update = 10000

//setting custom icon
let icon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50,50],
    iconAnchor: [25,25]

})

let map = L.map('iss-map').setView([0,0],1)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoici1oYW5uYSIsImEiOiJja2cwMjVmdWUwODNiMnltdDk5andxNnh1In0.nIU2HQ4FkMaruAVLuJdV-A'
}).addTo(map)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let max_failed_attempts = 3
iss(max_failed_attempts)

setInterval(iss,update)

function iss(attempts) {
    if (attempts <= 0){
        console.log('Too many errors, abandoning requests to get ISS position.')
        return
    }
    fetch(url)
        .then( res => res.json())
        .then( issData => {
            console.log(issData)
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long

            if (!issMarker) {
                issMarker = L.marker([lat,long], {icon: icon}).addTo(map)
            } else {
                issMarker.setLatLng([lat,long])
            }
            issTime.innerHTML = Date()
        })
        .catch( err => {
            console.log(err)
        })
        .finally( ()=>{
            setTimeout(iss,update, attempts)
        })
}
