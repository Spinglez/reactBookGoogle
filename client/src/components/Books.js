import React from 'react'


function Books(props){

  return (
    <div>
    <div><h4>Results :</h4></div>
    {props.data.length > 0 && props.data.map(item => (
      <div key={item.id} className="container mt-2 mb-3">
        <div className="row">
          <div className="col-11">
            <h5>
              {item.volumeInfo.title}
            </h5>
            <p>{item.volumeInfo.authors.map(item => {
                return item
              })}</p>
          </div>
          <div className='col mb-1'>
            <button onClick={() => props.handleSaveBtn(item)}>Save</button>
            <button onClick={() => props.handleViewBtn(item.volumeInfo.infoLink)}>View</button>
          </div>
        </div>
        <div className="row border border-solid">
          <div className="col">
            <img className="rounded float-left pt-2 pr-4 pb-2" src={item.volumeInfo.imageLinks.smallThumbnail} alt=""/>
            <p className="text-wrap">{item.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    ))}
    {props.data.length <= 0 &&
      <div> Search a book to see results!</div>
    }
    </div>
  )
}

export default Books
