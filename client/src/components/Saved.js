import React from 'react'
import Books from './Books'

const Saved = (props) => {

  let dbData = [];

  props.getDbData()
    .then(res => {
      dbData.push(res.data) 
    }).catch(err =>{
      if (err) throw console.error(err);
    })

    console.log(dbData);

  return (
    <div className='mt-3'>

    </div>
  )
}

export default Saved
