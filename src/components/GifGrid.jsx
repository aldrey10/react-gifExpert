import { ListGifs } from "./ListGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {


  const { images, isLoading } = useFetchGifs(category);




  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2 >Cargando...</h2>)
        }
        <div className="card-grid">
          {
            images.map(({id, title, url})=>
            (
            <ListGifs
              key={id}
              title={title}
              url={url}
            />
            ))
          }
        </div>
    </>
  )
}