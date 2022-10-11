import { useState, useEffect} from "react";
import { getgifs } from "../helpers/getGifs";

export const useFetchGifs = ({category}) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getImages = async () => {
        const newImages = await getgifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
