import React from 'react'

const Button = (props) => {
  return (
    <div>
    <a className='btn'>{props.children}</a>
    </div>
  )
}

export default Button
