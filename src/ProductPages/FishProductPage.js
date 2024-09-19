import React from 'react'
import ProductCard from '../Components/ProductComponent/ProductCard'
import ProductPageStructure from '../Components/ProductComponent/ProductPageStructure'

export default function FishProductPage() {
    return (
        <div>
            <ProductPageStructure />

            <div className='container'>
                {/*Note :  Follwing are run on the loop as per data, if not running run them */}
                <div className='row mb-3' style={{ border: "2px solid red", textAlign: "left" }}>
                    {/* <div className='col position-absolute start=0' s> */}
                    <p> Products other stuffs</p>
                    {/* </div> */}

                </div>
            </div>

            <ProductCard />

        </div>
    )
}
