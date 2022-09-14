import React from 'react'
import PropTypes from 'prop-types'
import './selector.css'

const Selector = ({ description, handleChange, name, options }) => {
  return (
    <div className={ name } >
      <label className='label'>{ description }</label>
      <select onChange={ handleChange } name={ name } id={ name }>
        {
          options && options.map(({ code, name }) => {
            return <option key={`${name}_${code}`} value={ code }>{ name }</option>
          })
        }
      </select>
    </div>
  )
}

Selector.propTypes = {
  description: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.any
  ])
}
  
export default Selector
