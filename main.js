var temperature = 0;

const getip = () => {

    fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
            let city = data.city;
            console.log(city)
            let loc = '📍 ' + city + ', ' + data.country;
            document.getElementById("city").innerHTML = loc;
            const key = "8987e057165d2a4223dd4d8308a2ddb1";
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)
                .then((response) => response.json())
                .then((data) => {
                    let temp = Math.round(data.main.temp - 273.5) + '˚C';
                    console.log(temp)
                    document.getElementById("temp").innerHTML = temp;
                    temperature = Math.round(data.main.temp - 273.5);
                    if( temperature > 20 ) {
                        ROOT.dataset.weather = "cloudy";
                    }
                    else {
                        ROOT.dataset.weather = "rain";
                    }
                });
        });
}

getip()

const searchlocation = () => {

    var city = form.city.value;
    const key = "8987e057165d2a4223dd4d8308a2ddb1";
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)
                .then((response) => response.json())
                .then((data) => {
                    let temp = Math.round(data.main.temp - 273.5) + '˚C';
                    document.getElementById("temp").innerHTML = temp;
                    var loc = '📍 ' + city;
                    document.getElementById("city").innerHTML = loc;
                    console.log(loc)
                    console.log(temp)
                    temperature = Math.round(data.main.temp - 273.5);
                    if( temperature > 20 ) {
                        ROOT.dataset.weather = "cloudy";
                    }
                    else {
                        ROOT.dataset.weather = "rain";
                    }
                });

}

const button = document.querySelector('button');
const ROOT = document.querySelector('html');

function changebg() {
    if( temperature > 20 ) {
        ROOT.dataset.weather = "cloudy";
    }
    else {
        ROOT.dataset.weather = "rain";
    }
}

changebg()







