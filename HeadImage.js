import React from 'react'
import headimagepage1 from "../media/head-image-page1.jpg"; 
import laptop from "../media/laptop.png"
import "./HeadImage.css"

const HeadImage = () => {
    return (
        <div 
        class="parent"
        >
            <img  class="image2" src={headimagepage1} width="100%" height="165%"/>
            <img class="image1" src={laptop} width="42.5%" height="25%"/>
            
        
        
        </div>
    )
}

export default HeadImage
