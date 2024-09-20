// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import ProductCard from '../Components/ProductComponent/ProductCard'
// import Slider from '../Components/ProductComponent/Slider'

// export default function FishHome() {

//     // const [imgarr, setimgarr] = useState([]);

//     let imgarr = [];

//     const[img0, setimg0] = useState("");
//     const[img1, setimg1] = useState("");
//     const[img2, setimg2] = useState("");
//     const[img3, setimg3] = useState("");
//     const[img4, setimg4] = useState("");
//     const[img5, setimg5] = useState("");


//     let fetchurl = async () => {
//         try {
//             for (let i = 1; i <= 6; i++) {
//                 let fetchdata = await fetch("http://localhost:8080/getFishSliderImg=" + i);
//                 let jsondata = await fetchdata.json();
//                 let data = jsondata["imgurl"];
//                 imgarr.push(data);
//             }
//             // console.log(imgarr);

//             while(true)
//             {
//                 if(imgarr.length <= 6)
//                 {
//                     // console.log("its ok");
                    
//                     setimg0(imgarr[0]);
//                     setimg1(imgarr[1]);
//                     setimg2(imgarr[2]);
//                     setimg3(imgarr[3]);
//                     setimg4(imgarr[4]);
//                     setimg5(imgarr[5]);
                    
                    
//                     // console.log(img5);
//                     // console.log(img4);
                   
//                     break;
//                 }
//                 else
//                 {
//                     continue;
//                 }
//             }

//             // console.log(imgarr);

//         }
//         catch (e) {
//             console.log(e);
//         }
//     }

//     fetchurl();
// //  ------------------------------------------------------------

//     const prodarray = [];

//     let fetchproduct = async () => {
//         try {
//             for (let i = 1; i <= 6; i++) {
//                 let fetchproddata = await fetch("http://localhost:8080/getfishproducttemp=" + i);
//                 const prodjsondata = await fetchproddata.json();
//                 let imgurl =  prodjsondata["imgUrl"];
//                 let name =  prodjsondata["fname"];
//                 let price =  prodjsondata["price"];
//                 let availabel =  prodjsondata["availableQuantity"];

                

//                 prodarray.push(
//                     <ProductCard ref = {i} key = {i} imgurl = {imgurl} name = {name} price = {price} availabel = {availabel} />
//                 );


//                 // console.log(prodarray.pop());
//                 // console.log(imgurl);
//                 // console.log(prodjsondata);
//                 // imgarr.push(data);
//             }
//             // console.log(imgarr);
//             // (prodarray.length === 6) ? return prodarray : console.log(null); 
//         }
//         catch (e) {
//             console.log(e);
//         }
//         finally
//         {
//             console.log(prodarray);
//             console.log("finally of fectch product fish home. js");
//             return ;
//         }
//     }

//     // fetchproduct();

//     // -----------------------------------------
//     return (
//         <div>
//             <div className='container py-md-4 mt-2'></div>
//             <div>

//                 <Slider 
//                 imgurl_0 = {img0}
//                 imgurl_1 = {img1}
//                 imgurl_2 = {img2}
//                 imgurl_3 = {img3}
//                 imgurl_4 = {img4}
//                 imgurl_5 = {img5}
//                 />

//                 <div className="card-group row-cols-md-4 g-1">

//                     {
//                         fetchproduct
//                     }

//                     {/* <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard /> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import ChildSlider from '../Components/ProductComponent/ChildSlider';
import ProductCard from '../Components/ProductComponent/ProductCard';
import Slider from '../Components/ProductComponent/Slider';

export default function FishHome() {
    // State to store slider image URLs
    const [sliderImages, setSliderImages] = useState([]);
    // State to store product cards
    const [products, setProducts] = useState([]);

    // Fetch Slider Images
    const fetchSliderImages = async () => {
        try {
            let imgarr = [];
            for (let i = 1; i <= 6; i++) {
                let fetchdata = await fetch(`http://localhost:8080/getFishSliderImg=${i}`);
                let jsondata = await fetchdata.json();
                let data = jsondata["imgurl"];
                imgarr.push(data);
            }
            setSliderImages(imgarr);
        } catch (e) {
            console.log(e);
        }
    };

    // Fetch Products
    const fetchProducts = async () => {
        try {
            let prodArray = [];
            for (let i = 1; i <= 6; i++) {
                let fetchproddata = await fetch(`http://localhost:8080/getfishproducttemp=${i}`);
                let prodjsondata = await fetchproddata.json();
                let imgurl = prodjsondata["imgUrl"];
                let name = prodjsondata["fname"];
                let price = prodjsondata["price"];
                let available = prodjsondata["availableQuantity"];

                prodArray.push(
                    <ProductCard
                        key={i}
                        imgurl={imgurl}
                        name={name}
                        price={price}
                        available={available}
                    />
                );
            }
            setProducts(prodArray);
            // console.log(prodArray);
        } catch (e) {
            console.log(e);
        }
        finally
        {
            // console.log(products + "this is the state");
        }
    };

    // Fetch data when component mounts
    useEffect(() => {
        fetchSliderImages();
        fetchProducts();
    }, []); // Empty array to only run on component mount

    return (
        <div>
            <div className='container py-md-4 mt-2'></div>
            <div>
                {sliderImages.length > 0 && (
                    <Slider
                        imgurl_0={sliderImages[0]}
                        imgurl_1={sliderImages[1]}
                        imgurl_2={sliderImages[2]}
                        imgurl_3={sliderImages[3]}
                        imgurl_4={sliderImages[4]}
                        imgurl_5={sliderImages[5]}
                    />
                )}

                {
                (sliderImages.length > 0 ? 
                <ChildSlider 
                    imgurl_0={sliderImages[0]}
                    imgurl_1={sliderImages[1]}
                    imgurl_2={sliderImages[2]}/>
                : <p>Wait for few seconds</p> )
                }

                <div style={{
                    backgroundColor: "#e0e0e0", padding: "10px", margin: "8px", borderRadius: "20px"
                    , boxShadow: "0px 0px 20px 0 black"
                }}>

                    <h1 style={{ textAlign: "left", marginLeft: "5px" }}>My Favourite</h1><br />
                    <div className="card-group row-cols-md-4 g-1">

                        {products.length === 6 ? products : <p>Loading products...</p>}
                    </div>
                </div>
            </div>
            
            
            
        </div>
    );
}


