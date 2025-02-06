import axios from "axios";

const Api =  axios.create({

    baseURL:"https://flight-radar1.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '6c554a6d71msh94191922f8bd431p12f8dfjsn5e7a7a88497b',
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
      }
    
});

export default Api;