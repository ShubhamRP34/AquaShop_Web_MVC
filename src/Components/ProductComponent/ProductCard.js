import React from 'react'
import { useState } from 'react'

export default function ProductCard(props) {
    // const [Title, setTitle] = useState("Title");
    // const [firstValue, setfirstValue] = useState("Title");
    // const [secondValue, setsecondValue] = useState("Title");
    // const [buttonTitle, setbuttonTitle] = useState("Title");
 

    return (


        <div>
            <div id = "prod" className="card mb-3 text-start mx-1" style={{width: "15rem" , boxShadow : "7px 5px 15px 0 black"}}>
                <img src={props.imgurl} className="card-img-top" alt="..." style={{height : "170px", objectFit : "cover", width : "100%"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">
                            <p>
                                <span className='h6'>Price :</span> {props.price} Per Peice <br></br>
                                <span className='h6'>Available :</span> {props.available}
                            </p>
                        </p>
                    
                        <a href="/Fish info" className="btn btn-primary">Buy</a>
                        <a href="/Fish info" className="btn btn-success mx-1">Cart</a>
                    </div>
            </div>
        </div>
    )
}
