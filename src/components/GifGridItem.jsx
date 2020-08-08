import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({title, url, id}) => {
   // console.log(title, url, id)
    return (
        <div className='card animate__animated animate__fadeInBottomRight'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string
  
}

export default GifGridItem
