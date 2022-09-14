import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ status, error = null }) => {  
  return (
    <div className={ status }>
      { 
       status === 'loading' ? <h3>Loading...</h3> : <h3>Error: { error.message }</h3>
      }
    </div>
  )
}

Message.prototype = {
  status: PropTypes.string,
  error: PropTypes.any
}

export default Message