//

let city = null
let key = "ef84c9f176e654737a9cb10d2927de6c"
var search
  function buscar() {
    document.getElementById("search").value;
    return search;
  }

 city = buscar()
  console.log(search)
  city = "santiago de chile"

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

  axios.get(url)
    .then(response => {
      this.users = response.data;
      let clima = response.data;
      let icon = response.data.weather[0].icon
      let dato = response.data.weather[0].description
      let result = `<h1>${response.data.name}</h1><li>${response.data.weather[0].description}</li><br><li>Temperatura:<h2>${Math.floor((response.data.main.temp))}°<h2></li><li>Min: ${Math.floor(response.data.main.temp_min)}°</li><li>Max: ${Math.floor(response.data.main.temp_max)}°</li>`
      let img = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
      document.getElementById("container").innerHTML = result
      document.getElementById("inner-skew").innerHTML = img
    })
    .catch(e => {
      // Podemos mostrar los errores en la consola
      console.log(e);
    })


    /*
document.getElementById("btn").addEventListener('click', function () {
   buscar() {
    search = document.getElementById("search").value;
    return search
  }
  /*search= document.getElementById("search").value;
  return search
  })*/
