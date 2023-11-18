let app = document.querySelector("#app");
let weatherDetails = document.querySelector("#weather-details");
let cityName = document.querySelector("#city-name");
let searchBtn = document.querySelector(".search");
let weatherCity = document.querySelector(".weather-city");
let temp = document.querySelector(".temp");
let feelsTemp = document.querySelector(".feels-like");
let humidity = document.querySelector(".hum-val");
let wind = document.querySelector(".wind-val");
let backBtn = document.querySelector(".back-btn");
let msg = document.querySelector(".msg");
let data;

searchBtn.addEventListener("click", ()=>{
    if(cityName.value === ""){
        msg.innerHTML = "enter city name"
    }else{
        msg.innerHTML = "";
        callApi(cityName.value);
    }
})

let callApi = async (city)=>{
    let report = await fetch(`https://api.weatherapi.com/v1/current.json?key=a4c2b1408e974194861181505232509&q=${city}&aqi=no`)
    let data = await report.json();
    console.log(data);
    app.style.zIndex = -1;
    app.style.opacity = 0;
    weatherDetails.style.opacity = 1;
    weatherDetails.style.zIndex = 1;
    weatherCity.innerHTML = `${data.location.name}`;
    temp.innerHTML = `${data.current.temp_c}°C`;
    feelsTemp.innerHTML = `${data.current.feelslike_c}°C`;
    humidity.innerHTML = `${data.current.humidity}%`;
    wind.innerHTML = `${data.current.wind_kph}km/hr`;
}

backBtn.addEventListener("click",()=>{
    app.style.zIndex = 1;
    app.style.opacity = 1;
    weatherDetails.style.opacity = 0;
    weatherDetails.style.zIndex = -1;
    cityName.value = "";
})
