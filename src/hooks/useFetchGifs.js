import { useEffect , useState} from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
        const newImages = await getGifs({category});
        setImages(newImages);
        setIsLoading(false);
    }
    //dos argumentos:
    // el primero es lo que quieres que el useEffect haga (una funcion)
    // el segundo son los parametros para indicar cuando quieres que se haga
    // si el segundo está vacio, solo se ejecutará la primera vez
    useEffect( () => {
        getImages();
    }, [] )

  return {
    images,
    isLoading
  }
}
