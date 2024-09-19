import React from 'react'
import { useState } from 'react';

export default function HomeFeatureLeft(props) {

    // console.log(props.imgurl(1) + "my consles");

    //     let ImgPort = "http://localhost:8080/getimage=2";
    // // let Imgurl = fetch("http://localhost:8080/getimage=1");
    //     // let imgurl;

    let i_id = props.id;

    const [BtnStyle, setbtnstyle] = useState({
        backgroundColor: ""
    });
    
        const [imgurl, seturl] = useState("");
        

        let fetchurl = async (id) =>
        {
          try
          {
            let fetchdata = await fetch("http://localhost:8080/getimage=" + id);
            let jsondata = await fetchdata.json();
            // console.log(jsondata);
            let data = jsondata["file_path"];
            // console.log(data);
            seturl(data);
            // return data;
          }
          catch(e)
          {
              console.log(e);
          }
        }

        fetchurl(i_id);
    
    // //    imagefetcher(props.id);


    let changebtncolor = () =>
    {
        setbtnstyle({backgroundColor : props.btnColor});
    }

    let resetbtncolor = () =>
    {
        setbtnstyle({backgroundColor : ""});
    }



    return (
        <div className='container-fluid' style={{ margin : "auto", borderBottom : "1px solid gray", padding : "20px"}}>
            <div className="row my-5" >
                <div className="col " style={{textAlign : "left"}}>
                    <p className="h1" style={{color : props.hcol}}>{props.FeatureTitle}</p>
                    <p>{props.titlebottomline}</p>
                    <p className='my-4'>
                        {props.Description}
                    </p>
                    <p className="h6 my-4">
                        {props.bottomline}
                    </p>
                    <button type="button" className="btn btn-primary btn-lg" style ={BtnStyle} onMouseEnter={changebtncolor} onMouseLeave ={resetbtncolor}>{props.buttext}</button>
                </div>

                <div className="col mx-auto">
                    <img src={imgurl} className="rounded mx-auto d-block" alt="..." 
                    style={{border: "2px solid " + props.bcol}} height ={400} width={400}/>
                </div>
            </div>
        </div>
        )



            {/* <div className="row featurette">
                <div className="col-md-7" name = "text">
                    <p className="h3">WellCome to AquaShop </p>
                    <p>Let's find the piece of ocean for you</p>

                </div>
                <div className="col-md-9" name = "image">
                    
                </div>
            </div> */}
}
