
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);

  }, function (error) {
    console.log(error);
  });
} else {
  //Caso NO soporta geolocalización
  alert('Navegador NO soporta geolocalización');
}

// actualizar lat y long
let lat = -33.45;
let lon = -70.64;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&appid=985e85838a70919538d2f1a260350ffd`

let data
// que eliga entre iconos
let icon ="01d"
if (data === "clear sky") {
  icon = "01d"
} else if (data === "few clouds") {
  icon = "02d"
} else if (data === "scattered clouds") {
  icon = "03d"
} else if (data === "broken clouds") {
  icon = "09d"
} else if (data === "shower rain") {
  icon = "10d"
} else if (data === "rain") {
  icon = "11d"
} else if (data === "thunderstorm") {
  icon = "08d"
} else if (data === "snow") {
  icon = "13d"
} else if (data === "mist") {
  icon = "50d"
}






axios.get(url)

  .then(response => {
    this.users = response.data;
    let clima = response.data;
    const data = response.data.weather[0].description
    let result = `<h1>${response.data.name}</h1><li>${response.data.weather[0].description}</li><li>Temperatura:${Math.floor((response.data.main.temp) / 33)}°</li><li>Min: ${Math.floor((response.data.main.temp_min) / 33)}°</li><li>Max: ${Math.floor((response.data.main.temp_min) / 33)}°</li>`
    let img = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
    document.getElementById("container").innerHTML = result
    document.getElementById("inner-skew").innerHTML = img


console.log(data)

  })
  .catch(e => {
    // Podemos mostrar los errores en la consola
    console.log(e);
  })


  // falta es buscador de ciudades