import axios from 'axios';

export default {
}



const axios = require('axios');


const d = document,
  c = console.log,
  url = "https://api.openweathermap.org/data/2.5/weather?lat=-33.4&lon=-70.6&appid=985e85838a70919538d2f1a260350ffd"


axios.get(url)
  .then(response => {
    this.users = response.data;
    let clima = response.data;





  })
  .catch(e => {
    // Podemos mostrar los errores en la consola
    console.log(e);
  })

