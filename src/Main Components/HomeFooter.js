import React from 'react';
import { useState } from 'react';

export default function HomeFooter(props) {

    const [mediaimgurl1, setmiu1] = useState("");
    const [mediaimgurl2, setmiu2] = useState("");
    const [mediaimgurl3, setmiu3] = useState("");
    const [mediaimgurl4, setmiu4] = useState("");

    // let i_id = props.id;
    let array = [];

    let fetchurl = async () =>
    {
      try
      {
        for(let i = 7; i < 11; i++)
        {
            let fetchdata = await fetch("http://localhost:8080/getimage=" + i);
            let jsondata = await fetchdata.json();
            let data = jsondata["file_path"];
            array.push(data);
        }

        setmiu1(array.pop());
        setmiu2(array.pop());
        setmiu3(array.pop());
        setmiu4(array.pop());

        // console.log(array);

        // seturl(array[1]);

      }
      catch(e)
      {
          console.log(e);
      }
    }

    fetchurl();

    return (
        <>
            <div className='container-fluid' >
                <div className='row pt-lg-4 bg-dark' >
                    <div className='col' style={{ textAlign: "left", color: "white" }}>
                        <p className='h3'>STAY CONNECTED</p>
                        <p>Join Over 10,500 + Users, the best place to fullfuill your habit of become a aquascaper . . .</p>
                        <button type="button" className="btn btn-lg" style={{ backgroundColor: "#bd5e1e", color: "white", border: "0px solid white" }}>Sign-Up</button>
                        
                        <div className='row container'>
                            <div className='col'><img src={mediaimgurl1} alt="" className='rounded d-block my-3' width={40} height={40} /></div>
                            <div className='col'><img src={mediaimgurl2} alt="" className='rounded d-block my-3' width={40} height={40} /></div>
                            <div className='col'><img src={mediaimgurl3} alt="" className='rounded d-block my-3' width={40} height={40} /></div>
                            <div className='col'><img src={mediaimgurl4} alt="" className='rounded d-block my-3' width={40} height={40} /></div>
                        </div>
                    </div>
                    <div className='col'>
                        <p className='h3' style={{ color: "white" }}>Connect to AquaShop</p>
                        <p style={{ color: "white" }}>Discover the beauty of aquatic life with our online aquarium store, where quality meets convenience!</p>
                        <p><a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">see about us &gt;</a></p>
                    </div>
                    <div className='col'>
                        <p className='h3' style={{ textAlign: "left", color: "white" }}>NAVIGATE</p>
                        <div className='row my-3'>
                            <div className='col' style={{ textAlign: "left" }}>
                                <p><a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Portfolio &gt;</a></p>
                                <p><a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">About us &gt;</a></p>
                                <p><a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Our team &gt;</a></p>
                                <p><a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Blog &gt;</a></p>
                            </div>
                            <div className='col' style={{ textAlign: "left" }}>
                                <p><a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Events &gt;</a></p>
                                <p><a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Support &gt;</a></p>
                                <p><a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact us &gt;</a></p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className='row bg-dark' style={{ borderTop: "1px soild white", color : "white"}}>
                <p><span className='h5'>Aqua World Online Store - </span>
                    123 Oceanic Avenue
                    Coral Bay, CB 56789
                    Atlantis City, Aqua State
                    United States
                </p>

            </div> */}
            </div>

            <div className='container-fluid bg-dark' style={{ borderTop : "1px solid #5c5b5a" }}>
                <div className='row pt-lg-3' style={{color: "white" }}>
                    <p><span className='h5'>Aqua World Online Store - </span>
                        123 Oceanic Avenue
                        Coral Bay, CB 56789
                        Atlantis City, Aqua State
                        United States
                    </p>
                </div>
                <div className='row' style={{color : "white"}}>
                    <p>
                        <span className='h5'>Customer Support Number :</span>
                        +1 (800) 555-1234
                    </p>
                </div>
                <div className='row' style={{color : "white"}}>
                    <p>
                        <span className='h5'>Email : </span>
                        <a href="/" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">support@aquaworldstore.com</a>
                    </p>
                </div>
                <div className='row' style={{color : "white"}}>
                    <p>
                       @Copyright reserve
                    </p>
                </div>
            </div>
        </>
    )
}
