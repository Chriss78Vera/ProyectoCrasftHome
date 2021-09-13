import React from 'react';
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';
import products from '../../Data/product_data';
import Product from './cards';


function GRID (){
    return(
    <div>
    <Row gutter={[16,16]} >
    {
        products.map(product =>(
            <Col xs={24} sm={12} md={8} lg={4}> 
                <Product key={product.id} product={product}/>
             </Col> 
        ))
    }
    </Row>
  </div>
    )
}

export default GRID;