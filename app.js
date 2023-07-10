let badal = document.querySelectorAll(".badal")[0];
let feelsLike = document.querySelectorAll(".feel-like")[0];
let humidity = document.querySelectorAll(".humidity")[0];
let windSpeed = document.querySelectorAll(".wind-speed")[0];
let country = document.querySelectorAll(".country-name")[0];
let temprature = document.querySelectorAll(".temp")[0];
let userInput = document.querySelectorAll('.search')[0];
let city = document.querySelectorAll(".city-name")[0];
let weatherType =document.querySelectorAll(".weather-type")[0];
let weatherImage = document.querySelectorAll(".img")[0]; 

navigator.geolocation.getCurrentPosition(location=>{
    let {coords} = location;
    let latitude = coords.latitude;
    let longitude = coords.longitude;

fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e7c97b3d763be7129401dad15d485dc4&units=metric`)
.then(res=> res.json())

.then(res =>{
    console.log(res)
    
    let {main,name,weather,wind,clouds,sys} =res;
    console.log(clouds)
    
badal.innerHTML = `${clouds.all}%`;
temprature.innerHTML=`${Math.round(main.temp)}°c`;
windSpeed.innerHTML=wind.speed + "km/h";
humidity.innerHTML=`${Math.round(main.humidity)}%`;
feelsLike.innerHTML=main.feels_like + "%";
city.innerHTML=name;
weatherType.innerHTML = weather[0].main;
country.innerHTML = sys.country;


if(weather[0].main === "Smoke"){
weatherImage.src = "./images/smoke.svg";
}
else if(weather[0].main === "Snow"){
    weatherImage.src = "./images/snow.svg";

}
else if(weather[0].main === "Haze"){
    weatherImage.src = "./images/haze.svg";

}else if(weather[0].main === "Rain"){
    weatherImage.src = "./images/rain.svg";

}
else if(weather[0].main === "Clear"){
    weatherImage.src = "./images/clear-day.svg";

}

else if(weather[0].main === "Fog"){
    weatherImage.src = "./images/fog.svg";

}
else if(weather[0].main === "Dust"){
    weatherImage.src = "./images/dust.svg";

}else if(weather[0].main === "Clouds"){
    weatherImage.src = "./images/cloudy.svg";

}
else if(weather[0].main === "Thunderstorms"){
    weatherImage.src = "./images/thunderstorms.svg";

}

else {
    weatherImage.src = "./images/clear-day.svg";
}
})

.catch(err=>{
    console.log(err)
})

// console.log(location)



})


let inputValue = document.querySelectorAll(".search")[0];
let search = () =>{
if(inputValue.value){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=e7c97b3d763be7129401dad15d485dc4&units=metric`)    
.then(res=> res.json())

.then(res =>{
    if(res.cod==="404"){
        Swal.fire(
            'Error',
            'Enter city name',
            'error'
          )  
    }
    console.log(res)
    
    let {main,name,weather,wind,clouds,sys} =res;
    console.log(clouds)
    
badal.innerHTML = `${clouds.all}%`;
temprature.innerHTML=`${Math.round(main.temp)}°c`;
windSpeed.innerHTML=wind.speed + "km/h";
humidity.innerHTML=`${Math.round(main.humidity)}%`;
feelsLike.innerHTML=main.feels_like + "%";
city.innerHTML=name;
weatherType.innerHTML = weather[0].main;
country.innerHTML = sys.country;

if(weather[0].main === "Smoke"){
weatherImage.src = "./images/smoke.svg";
}
else if(weather[0].main === "Snow"){
    weatherImage.src = "./images/snow.svg";

}
else if(weather[0].main === "Haze"){
    weatherImage.src = "./images/haze.svg";

}else if(weather[0].main === "Rain"){
    weatherImage.src = "./images/rain.svg";

}
else if(weather[0].main === "Clear"){
    weatherImage.src = "./images/clear-day.svg";

}

else if(weather[0].main === "Fog"){
    weatherImage.src = "./images/fog.svg";

}
else if(weather[0].main === "Dust"){
    weatherImage.src = "./images/dust.svg";

}else if(weather[0].main === "Clouds"){
    weatherImage.src = "./images/cloudy.svg";

}
else if(weather[0].main === "Thunderstorm"){
    weatherImage.src = "./images/thunderstorms.svg";

}
else {
    weatherImage.src = "./images/clear-day.svg";
}
})

.catch(err=>{
    console.log(err)
})

}

else{
    Swal.fire(
        'Error',
        'Enter city name',
        'error'
      )
}




}
