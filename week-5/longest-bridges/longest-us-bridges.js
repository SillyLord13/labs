//set up US map bas coordinates and scope zoom
let usCoordinates = [37.09024, -95.712891]
let zoomLevel = 4.25

//create map element
let map = L.map('bridge-map').setView(usCoordinates,zoomLevel)

//add tile layer with roads and states to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoici1oYW5uYSIsImEiOiJja2cwMjVmdWUwODNiMnltdDk5andxNnh1In0.nIU2HQ4FkMaruAVLuJdV-A'
}).addTo(map)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create custom bridge icons to replace default marker
var bridgeIcon = L.icon({
    iconUrl: 'img/bridge.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})

//array containing all bridge objects and relevant information
bridges = [
    {"name": "Verrazno-Narrows Bridge", "Location":"New york, NY", "Span":1298.4, "Coordinates":[40.6066,-74.0447], "website":"https://en.wikipedia.org/wiki/Verrazzano-Narrows_Bridge"},
    {"name": "Golden Gate Bridge", "Location":"San Francisco and Marin, CA", "Span":1280.2, "Coordinates":[37.8199,-122.4783], "website":"https://www.goldengate.org/"},
    {"name": "Mackniac Bridge", "Location":"Mackinaw and St. Ignace, MI", "Span":1158.0, "Coordinates":[45.8174,-84.7178],"website":"https://www.mackinacbridge.org/"},
    {"name": "George Washington Bridge", "Location":"New York, NY and New Jersey, NJ", "Span":1067.0, "Coordinates":[40.8517,-73.9527],"website":"https://www.panynj.gov/bridges-tunnels/en/george-washington-bridge.html"},
    {"name": "Tacoma Narrows Bridge", "Location":"Tacoma and Kitsap, WA", "Span":853.44, "Coordinates":[47.2690,-122.5517],"website":"https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge"}
]

//loop through array to place bridge obj information in format for the markers
bridges.forEach(function (bridge){
    let name = bridge.name
    let web = bridge.website
    let location = bridge.Location
    let span = bridge.Span
    let coordinates = bridge.Coordinates
    let tempStr = `${name}<br>Located in: ${location}<br>Span: ${span} meters<br>More Information <a href="${web}">HERE</a>`

//create and add the completed markers
    let marker = L.marker(coordinates,{icon: bridgeIcon})
        .bindPopup(tempStr)
        .addTo(map)
})