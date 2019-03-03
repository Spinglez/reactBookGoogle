import React from 'react'
import Books from './Books'

const ContentBox = (props) => {

  return (
    <div className='mt-3'>
      <Books
        handleViewBtn={props.handleViewBtn}
        handleSaveBtn={props.handleSaveBtn}
        data={props.data}
      />
    </div>
  )
}

export default ContentBox
