import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


const Gallery = ({ data }) => {


  const arr = data?.large
    ? data.large
    : data?.medium
      ? data.medium
      : data?.thummbanils;



  return (
    <div className='gallery'>
      {arr?.length > 0 ? (


        <Splide aria-label="My Favorite Images">
          {arr.map((item,key) => (

            <SplideSlide key={key}>
              <img src={item.src} alt="Image 1" />
            </SplideSlide>

          ))}
        </Splide>



      ) : (
        <div>  foto yok </div>
      )}
    </div>
  )
}

export default Gallery;