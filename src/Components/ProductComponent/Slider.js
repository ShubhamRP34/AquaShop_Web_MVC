import React from 'react'
// import { useState } from 'react';

export default function Slider(props) {

    // let getarray = async () =>
    // {
    //     let data = await props.imgarray[0];
    //     console.log(data + "this is mine");
    // }

    // getarray();

    // const[imgsrc1, setimgsrc1] = useState("");
    // const[imgsrc2, setimgsrc2] = useState("");
    // const[imgsrc3, setimgsrc3] = useState("");
    // const[imgsrc4, setimgsrc4] = useState("");
    // const[imgsrc5, setimgsrc5] = useState("");
    // const[imgsrc6, setimgsrc6] = useState("");

    // setimgsrc1(props.imgarray[0] === undefined || props.imgarray[0] === null ? null : props.imgarray[0]);
    // setimgsrc1(props.imgarray[1]);
    // setimgsrc1(props.imgarray[2]);
    // setimgsrc1(props.imgarray[3]);
    // setimgsrc1(props.imgarray[4]);
    // setimgsrc1(props.imgarray[5]);

    // console.log(props.imgarray);



    return (
        <div id="carouselExampleAutoplaying" className="carousel slide mb-4" data-bs-ride="carousel"  style={{height : "400px"}}>

            <div className="carousel-inner">
                <div className="carousel-item active" style = {{height : "100%"}}>
                    <img src={props.imgurl_0} className="d-block w-100" alt="Image 1" style = {{height : "400px"}}/>
                </div>
                <div className="carousel-item" style = {{height : "100%"}}>
                    <img src={props.imgurl_1} className="d-block w-100" alt="Image 2" style = {{height : "400px"}}/>
                </div>
                <div className="carousel-item" style = {{height : "100%"}}>
                    <img src={props.imgurl_2} className="d-block w-100" alt="Image 3" style = {{height : "400px"}}/>
                </div>
                <div className="carousel-item" style = {{height : "100%"}}>
                    <img src={props.imgurl_3} className="d-block w-100" alt="Image 4" style = {{height : "400px"}}/>
                </div>
                <div className="carousel-item" style = {{height : "100%"}}>
                    <img src={props.imgurl_4} className="d-block w-100" alt="Image 5" style = {{height : "400px"}}/>
                </div>
                <div className="carousel-item" style = {{height : "100%"}}>
                    <img src={props.imgurl_5} className="d-block w-100" alt="Image 5" style = {{height : "400px"}}/>
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
