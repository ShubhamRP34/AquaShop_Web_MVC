import React from 'react'

export default function ChildSlider(props) {
  return (
      
          <div id="childcarouselExampleAutoplaying" className="carousel slide  mb-4" data-bs-ride="carousel" style={{ height: "400px", margin: "8px" }}>

          <div className="carousel-inner" style={{ borderRadius: "20px", boxShadow: "0px 5px 15px 0 black" }}>

              <div className="carousel-item active" style={{ height: "100%" }}>
                  <img src={props.imgurl_0} className="d-block w-100" alt="Image 1" style={{ height: "400px" }} />
              </div>
              <div className="carousel-item" style={{ height: "100%" }}>
                  <img src={props.imgurl_1} className="d-block w-100" alt="Image 2" style={{ height: "400px" }} />
              </div>
              <div className="carousel-item" style={{ height: "100%" }}>
                  <img src={props.imgurl_2} className="d-block w-100" alt="Image 3" style={{ height: "400px" }} />
              </div>
          </div>
              

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
      
  )
}
