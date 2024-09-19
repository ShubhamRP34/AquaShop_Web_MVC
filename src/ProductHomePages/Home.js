import React, { useState } from 'react'

import HomeFeatureR1 from "../Components/HomeComponents/HomeFeatureRight"
import HomeFeatureL1 from "../Components/HomeComponents/HomeFeatureLeft"

export default function Home() {

  // const[imgurl1, setimgurl1] = useState("");

  // let data = null;

  // let fetchurl = async (id) =>
  // {
  //   try
  //   {
  //     let fetchdata = await fetch("http://localhost:8080/getimage=" + id);
  //     let jsondata = await fetchdata.json();
  //     console.log(jsondata);
  //     let data = jsondata["file_path"];
  //     console.log(data);
  //     return data;
  //   }
  //   catch(e)
  //   {
  //       console.log(e);
  //   }
  // }

  // fetchurl(1);


  return (
    <div>
       <div className='container my-5'></div>
      <HomeFeatureL1
        id="2"
        FeatureTitle="WellCome to AquaShop"
        titlebottomline="Let's find the piece of ocean for you."
        Description="Dive into our exclusive collection of vibrant and exotic fish that will bring life to your aquarium!
      From the graceful elegance of Betta Fish to the dazzling colors of Discus and the playful antics of 
      Clownfish, we offer a wide variety of freshwater and saltwater species. Each fish is carefully selected
      for its health, vibrancy, and compatibility, ensuring you receive only the best for your tank. Wheather 
      you're a biginner or a seasoned aquarist, our fish will add a stunning splash color and excitement to 
      your underwater world."
        bottomline="All our fish are ethically sourced and shipped in specialized packaging to ensure
      they arrive safely and stress-free, ready to thrive in your home aquarium."
        bcol="#1536a3"
        hcol="#1536a3" 
        buttext="Let's Explore . . ."
        btnColor="#1536a3"
        />

      <HomeFeatureR1
        id="6"
        FeatureTitle="Breathe Life into Your Tank"
        titlebottomline="Transform your aquarium into a lush, green paradise."
        Description="With our selection of high-quality aquatic plants. Our plants not only enhance the aesthetic
      appeal of your tank but also improve water quailty by absorbing harmful nitrates and providing essential oxygen.
      Choose from a variety of hardy and easy-to-maintain species like Java Fern, Anubias, and Amazon Sword, or opt for more
      advanced plants for experienced aquascapers. Each plant is freshly harvested and carefullypackaged to maintain its vitality
      during transit."
        bottomline="All plants are grown in nutrient-rish environments, ensuring robust root systems and 
      vibrant, healthy leaves that thrive underwater."
        bcol="green"
        hcol="green"
        buttext="See more . . ."
        btnColor="green"
      />

       <HomeFeatureL1
        id="1"
        FeatureTitle="Premium Aquarium Tanks and Equipment"
        titlebottomline="Create the perfect home for your aquatic life."
        Description="with our range of premium aquarium tanks and equipment. From sleek, modern tanks that
        complement any interior decor to advanced filtration systems that maintain crystal-clear water, we have
        everything you need to set up and maintain a healthy, beautiful aquarium. Explore our selection of lighting
        options to enhance the colors of your fish and plants, and browse our temperature control systems to keep
        your tank's environment just right."
        bottomline="Our tanks come in various sizes and styles, equipped with the latest technology to make 
        aquarium maintenance simple and hassle-free, ensuring a thriving environment for your aquatic pets."
        bcol="#575757"
        hcol="#575757"
        buttext="Check It Out . . ."
        btnColor="#575757" />

        <HomeFeatureR1
        id="3"
        FeatureTitle="Natural Stones and Decorative Sands"
        titlebottomline="Elevate your aquarium’s aesthetics with our range of natural stones and decorative sands."
        Description="Choose from a variety of hand-selected stones like Lava Rock, 
        Dragon Stone, and Seiryu Stone to create stunning underwater landscapes and aquascapes. 
        Pair them with our range of colored and textured sands to provide the perfect substrate for your plants and fish. 
        These natural materials not only enhance the visual appeal of your aquarium but also provide essential 
        hiding spots and surfaces for beneficial bacteria."
        bottomline="All our stones and sands are carefully sourced and pre-washed,
         making them safe and ready to use straight out of the package,
          ensuring a beautiful and healthy tank environment."
        bcol="#2161cf"
        hcol="#2161cf"
        buttext="See more . . ."
        btnColor="#2161cf"
        />

        <HomeFeatureL1
        id="5"
        FeatureTitle="Nutritious and High-Quality Diets for All Fish Types"
        titlebottomline="Ensure the health and vitality of your fish with our range of high-quality fish food."
        Description="Formulated with premium ingredients, 
        our food options provide balanced nutrition for all types of fish,
        from carnivorous species to herbivores and omnivores. Whether you prefer flakes, pellets, frozen,
        or live food, we have a variety to meet the dietary needs of every fish species in your aquarium.
        Our food is designed to enhance coloration, boost immune health, and promote natural growth patterns"
        bottomline=" We offer specialized food for different fish types, including color-enhancing
         formulas and disease-resistant diets, ensuring your fish thrive
         and display their full beauty."
        bcol="#eb5234"
        hcol="#eb5234"
        buttext="Check It Out . . ."
        btnColor="#eb5234" />

        <HomeFeatureR1
        id="4"
        FeatureTitle="Comprehensive Health Solutions for Your Aquatic Pets"
        titlebottomline=" Keep your fish healthy and free from disease with our range of effective fish medicines."
        Description="Whether you're dealing with common issues like Ich and fin rot or need advanced treatments for
         bacterial infections, we offer reliable solutions that are easy to use and safe for your entire aquarium.
          Our medicines are formulated by experts and are gentle on fish and plants while being highly effective
           against pathogens.
         Maintain a healthy aquarium environment and protect your aquatic pets with our trusted products."
        bottomline="Our fish medicines come with easy-to-follow instructions 
        and dosage guidelines, ensuring that you can treat and prevent health 
        issues with confidence and ease."
        bcol="#213694"
        hcol="#213694"
        buttext="See more . . ."
        btnColor="#213694"
        />
    </div>
  )
}
