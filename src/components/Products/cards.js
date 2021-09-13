import React from 'react';
import 'antd/dist/antd.css'; 
import '../../styles/crasftdesing.css';
import { ShoppingCartOutlined  } from '@ant-design/icons';
import accounting from 'accounting';
import { useState } from 'react';
import { Modal, Button,Card, Rate, Typography} from 'antd';
import { actionTypes }from '../../actions/Reducer';
import { useStateValue } from  '../../actions/StateProvider';
const { Title,Paragraph } = Typography;
const { Meta } = Card;



function Product ({product : { id ,name, productType,  price, rating, image, description}}){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [{basket}, dispatch ] = useStateValue();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const addToBasket = () =>{
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
        item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
      }
    })
  }
   return(
    <div>
    <Card
      className="card"
      extra={
      <Meta
      title={accounting.formatMoney(price)}
      description={productType}
    />
    }
    style={{ width: '310px'}}
    cover={
      <img
        alt="example"
        src={image}
        className="image"
      />
  
    }
    actions={ [
      <>
      <Button ghost  onClick={showModal} style={{ backgroundColor:'#3ae21f' }}>
        Descripción
      </Button>
      <Modal title={<Title level={3}> Descripción </Title>} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Title level={4}>{name}</Title>
          <Paragraph >{description}</Paragraph>
          <div style={{justifyItems: "center"}}>   
          <div >
            <h3><img src={image} className="imagecarrousel"/></h3>
          </div>      
          </div>
      </Modal>
    </>,
        <ShoppingCartOutlined style={{ fontSize: '27px', color: '#3ae21f' }} onClick={addToBasket} 
      />
    ]}
  >
    <Meta
     title={<Rate allowHalf defaultValue={rating} />}
    />
  </Card>
  </div>
    );

}
export default Product;

