import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { swalLoading } from "../helpers/sweetAlerts";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs({ category });



  return (
    <>

      <h3>{category}</h3>
     
      <div className="card-grid">
        {/*images.map*/}
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }

      </div>
    </>
  )
}
