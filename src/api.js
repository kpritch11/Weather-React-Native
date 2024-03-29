import Lodash from 'lodash';

var rootURL = 'http://api.openweathermap.org/data/2.5/weather?APPID=bfba5db7cce578048f894c823a59be50'

var kelvinToFarenheight = function(kelvin) {
    return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
}

module.exports = function(latitude, longitude) {
    var url = `${rootURL}&lat=${latitude}&lon=${longitude}`;
    console.log(url);

    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            return {
                city: json.name,
                temperature: kelvinToFarenheight(json.main.temp),
                description: Lodash.capitalize(json.weather[0].description)
            }
        });
        
}
