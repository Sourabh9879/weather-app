var inputvalue = document.querySelector('#city');
var btn = document.querySelector('#submit');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "null";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())  
    .then(data => {
        var nameval = data.name;
        var descrip = data.weather[0].description;
        var tempature = data.main.temp;
        var wndspeed = data.wind.speed;

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
        description.innerHTML = `Sky conditions: <span>${descrip}</span>`;
        wind.innerHTML = `Wind speed: <span>${wndspeed} km/h</span>`;
    }) 
    .catch(err => alert('You entered the wrong city.'));
});
