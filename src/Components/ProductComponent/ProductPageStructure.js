import React from 'react'

export default function ProductPageStructure(props) {
  return (
    <div>
      <div className='container py-md-4 mt-2'></div>
      <img src="..." className="img-fluid" alt="..."></img>

      {/* NOte : follwoing fields are fixed  */}
      <div className="container text-center">
        <div className="row">
          <div className="col-md-3 " style={{ border: "2px solid red" }}>
            <img src="" alt="Product image" style={{ border: "2px solid red" }} height={400} width={400} />

            <div className='row d-flex justify-content-center p-2 row-gap-1'>

              <div className='row d-block' style={{border : "2px solid red"}}>

                <button type="button" class="btn btn-primary">BUY</button>
              </div>
              <div className='row  d-block' style={{border : "2px solid red"}}>

                <button type="button" class="btn btn-warning">Add to cart</button>
              </div>

            </div>
          </div>
          <div className="col" style={{ border: "2px solid red", textAlign: "left" }} >
            <p className='mt-3'>
              <span className='h5'>{props.itemlabel1}</span> {props.itemdata1}<br></br>
              <span className='h5'>{props.itemlabel2}</span> {props.itemdata2}<br></br>
              <span className='h5'>{props.itemlabel3}</span> {props.itemdata3}<br></br>
              <span className='h5'>{props.itemlabel4}</span> {props.itemdata4}<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
