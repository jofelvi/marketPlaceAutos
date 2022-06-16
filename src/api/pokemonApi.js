import axios from "axios";

export const pokemonApiCall = async () =>{
    const requestOptions = {
        method: 'GET',
    };
    let resp = await  axios.get('https://pokeapi.co/api/v2/pokemon/ditto', requestOptions)
        .then(response =>  {
            console.log("response.data", response.data)
            return  response.data
        })

    return resp
}
