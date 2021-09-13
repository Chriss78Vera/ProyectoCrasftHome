import React from 'react';
import { Card} from 'antd';
import 'antd/dist/antd.css'; 
import '../../styles/crasftdesing.css';
import { Rate } from 'antd';
import accounting from 'accounting';
import { DeleteOutlined } from '@ant-design/icons';
import { useStateValue } from  '../../actions/StateProvider';
import { actionTypes }from '../../actions/Reducer';
const { Meta } = Card;


function CarProduct ({product : { id ,name, productType,  price, rating, image, description}}){
  const [{basket}, dispatch ] = useStateValue();
  const removeitem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  }) 
  return(
    <div style={{ paddingTop: "25px" }}>
  <Card
  className="card"
    extra={
      <Meta
      title={accounting.formatMoney(price)}
      description={name}
    />
    }
    cover={
      <img
        alt="example"
        src={image}
        className="image"
      />
    }
    actions={ [
      <DeleteOutlined style={{ fontSize: '27px', color: '#3ae21f' }} onClick= {removeitem}/>
    ]}
  >
    <Meta
      title={<Rate allowHalf defaultValue={rating} />}
    />
  </Card>
  </div>
    );

}
export default CarProduct;

