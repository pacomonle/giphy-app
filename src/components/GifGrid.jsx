import React /*,{ useEffect, useState }*/ from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
// import getGifs from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {
/*
   const [images, setimages] = useState([])

    useEffect(() => {

     getGifs(category).then(
         res =>{
            setimages( res )
         })

    }, [category])
S
  */
 // renombrando en la destructuracion con :
  const {loading, data:images} = useFetchGifs(category)
  

    return (
        <>
            <h3 className='animate__animated animate__flipInX'>{category}</h3>

            {
                loading && (<h3 className='animate__animated animate__flash'>Cargando...</h3>)                
            }
            <div className='card-grid'>
                {
                images.map( item  => (
                    <GifGridItem key={item.id} {...item}></GifGridItem>        
                ))  
                }
            </div>
            
                
          
        </>
    )
}

GifGrid.propTypes = {
  category : PropTypes.string.isRequired
}

export default GifGrid

