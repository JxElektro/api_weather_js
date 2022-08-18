let search = document.getElementById("search").innerText = "hola"

document.getElementById("btn").addEventListener('click',function(){
 
})
console.log(search)


let city = "japon"
let key = "ef84c9f176e654737a9cb10d2927de6c"
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`



axios.get(url)

  .then(response => {
    this.users = response.data;
    let clima = response.data;
    let icon = response.data.weather[0].icon 
    let dato = response.data.weather[0].description
    let result = `<h1>${response.data.name}</h1><li>${response.data.weather[0].description}</li><li>Temperatura:${Math.floor((response.data.main.temp))}°</li><li>Min: ${Math.floor(response.data.main.temp_min)}°</li><li>Max: ${Math.floor(((response.data.main.temp_max))/33) }°</li>`
    let img = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
    document.getElementById("container").innerHTML = result
    document.getElementById("inner-skew").innerHTML = img
console.log(users)
    console.log(response.data)
   
    
  })
  .catch(e => {
    // Podemos mostrar los errores en la consola
    console.log(e);
  })


  // falta es buscador de ciudades