import React from 'react'
import PropTypes from 'prop-types'
import './image.css'

const Image = ({ imgUrl }) => <img src={ imgUrl }></img>

Image.prototype = {
  imgUrl: PropTypes.string
}
  
export default Image
