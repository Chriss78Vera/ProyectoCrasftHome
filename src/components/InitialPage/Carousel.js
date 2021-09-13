import React from 'react';
import { Carousel } from 'antd';
import Image1 from '../../images/Slide1.png';
import Image2 from '../../images/Slide2.PNG'
import 'antd/dist/antd.css';


function Carousels (){
    return(
        <div>
        <Carousel autoplay>
            <div>
            <h3 ><img src={Image1} className="imageCarousels"/></h3>
            </div>
            <div>
            <h3 ><img src={Image2} className="imageCarousels"/></h3>
            </div>
    
        </Carousel>,
        </div>
    )
}
export default Carousels ;