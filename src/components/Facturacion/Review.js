import { List, Col, Row,Layout } from 'antd';
import { useStateValue } from  '../../actions/StateProvider';
import { getBasketTotal } from "../../actions/Reducer";
import accounting from "accounting";


const { Content } = Layout;
const CheckProduct= () => {
    const [{basket}, dispatch ] = useStateValue();
    
    return(
        <List
        itemLayout="vertical"
        header="Facturacion"
        >
          <List.Item >
            {
                basket?.map(prod=> (
                  <List.Item key={prod.name}>
                        <Row>
                            <Col span={12}>
                                <List.Item.Meta title={prod.name} 
                                    description={`Cantidad: ${1}`} />
                            </Col>
                             <Col span={12}>
                                <div> {accounting.formatMoney(prod.price)} </div>
                             </Col>
                        </Row>
                    </List.Item>
                ))
            }
                <div>
                    <List header="Total">
                    <Row gutter={[8,8]}>
                        <Col span={20}>
                        <Content className="contenedor">
                        <div> Total:  </div>
                        </Content>
                        </Col>
                        <Col span={4} >
                        <Content  className="contenedor">
                        <div>{accounting.formatMoney(getBasketTotal(basket))} </div>
                        </Content>
                        </Col>
                    </Row>
                    </List>
                </div>
            </List.Item>       
      </List>
      
    );
}
export default CheckProduct;