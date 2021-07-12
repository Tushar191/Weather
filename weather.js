
 let btn = document.getElementById('btn')
        
 btn.onclick = ()=> {
    weather.search()
 }
 
   let inp = document.getElementById("inp")
 
 inp.onkeyup = function (e) {
     if (e.key == "Enter") {
       weather.search()
     }
 }

let weather = {
    apiKey: "9630bd816b763bde1e4e3b304744625f",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        

        let { name } = data;
        let { icon, description } = data.weather[0]
        let { temp, humidity } = data.main;
        let { speed } = data.wind
        document.querySelector(".city").innerHTML = "Weather in " + [name]

        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"

        document.querySelector(".description").innerHTML = description

        document.querySelector(".temp").innerHTML = "<h1>" + temp + "°C" + "</h1>"

        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"

        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h"
 },

    search: function () {
        this.fetchWeather(document.getElementById('inp').value)
    }

}

weather.fetchWeather("Sonipat")


