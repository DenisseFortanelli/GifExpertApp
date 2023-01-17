import { getGifs } from "../helpers/getGifs"
import { useState, useEffect } from "react"
import { GiftItem } from "./GiftItem"
import { usesFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {
  
  //este es un custom hook
  const {images,isLoading} = usesFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading&&<h2>Cargando...</h2>}
      <div className="card-grid">
        {
          images.map(img => (
            < GiftItem key={img.id}
            {...img}/>
          ))
        }
      </div>
    </>
  )
}
