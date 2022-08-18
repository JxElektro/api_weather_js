
/*if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    
  }, function (error) {
    console.log(error);
  });
} else {
  //Caso NO soporta geolocalización
  alert('Navegador NO soporta geolocalización');
}
*/

let lat = -33.45;
let lon = -70.64;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=985e85838a70919538d2f1a260350ffd`

console.log(url)

axios.get(url)

  .then(response => {
    this.users = response.data;
    let clima = response.data;
    let estado = ""
    let result = `<li>Ciudad:${response.data.name}</li><li>Temperatura:${Math.floor((response.data.main.temp) / 33)}°</li><li>Min: ${Math.floor((response.data.main.temp_min) / 33)}°</li><li>Max: ${Math.floor((response.data.main.temp_min) / 33)}°</li>`
    document.getElementById("container").innerHTML = result
console.log(clima)
  })
  .catch(e => {
    // Podemos mostrar los errores en la consola
    console.log(e);
  })
