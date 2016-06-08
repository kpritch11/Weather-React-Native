var rootURL = 'api.openweathermap.org/data/2.5/weather?APPID=bfba5db7cce578048f894c823a59be50'

module.exports = function(latitude, longitude) {
    var url = `${rootURL}&lat=${latitude}&lon=${longitude}`;
}
