import type { GiphyRandomResponse } from "./data/giphy.response";


const API_KEY = 'Igz3lxTYVz5TD6kGcBY9WLqSnyVDSLww';


const createImageInsideDOM = ( url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.appendChild(imgElement);
}


const getRandomGifUrl = async(): Promise<string> => {

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
    );

    const { data }: GiphyRandomResponse = await response.json();
    
    return data.images.original.url;
}

// getRandomGifUrl().then(
//     url => createImageInsideDOM( url )
// )

//! El código de arriba y el de abajo hacen exactamente lo mismo, pero el de abajo es más limpio y fácil de leer, ya que no tiene la función anónima que recibe el url y luego llama a createImageInsideDOM, sino que directamente le pasa la función createImageInsideDOM como callback a la promesa que devuelve getRandomGifUrl, ya que esta función recibe un string y devuelve void, que es exactamente lo que necesita la función then para ejecutar el callback cuando se resuelva la promesa.

getRandomGifUrl().then(createImageInsideDOM)