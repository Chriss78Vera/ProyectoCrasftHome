import React from 'react';
import 'antd/dist/antd.css';
import { Col, Layout, Typography, Row} from 'antd';
import '../../styles/crasftdesing.css';
import MenuBar from '../InitialPage/Menu';
import Foters from '../InitialPage/foter';
import CarProduct from './checkproduct.js'
import { useStateValue } from  '../../actions/StateProvider';
import Totals from '../Facturacion/Total';
const { Header, Content } = Layout;
const { Title } = Typography;

const Shops = () =>{
  const [{basket}, dispatch ] = useStateValue();
  function ProductView(){
    return(
      <React.Fragment>
        <Row gutter={[16,16]} justify="center">
          {basket?.map((prod) => (
             <Col  xs={24} sm={12} md={8} lg={4}> 
             <CarProduct key={prod.id} product={prod}/>
            </Col> 
          ))}
          </Row>
      </React.Fragment>
    );
  }
    return(
      <div>
        <Layout className="layout">
            <Header className="head">
                <div className="logo" />
                    {/* NAVBAR */}
                       <MenuBar/>
            </Header>
           <Content className="content" >
            <Col xs={24}>
            <Title level={2} className="baskets" > CARRITO DE PRODUCTOS </Title>
            </Col>
              <Row gutter={[16,16]}>
                <Col xs={24} sm={12} md={8} lg={24}>
                  <Row>
                  <Col span={24}>
                    <Typography >
                      <Totals/>
                    </Typography>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={24} >
                <ProductView/>
                </Col> 
                  </Row>
                </Col>
              </Row>
              </Content>
                <div className="footer">
                    {/* Footer */}
                      <Foters/>
                  </div>
          </Layout>
      </div>
    );
}

export default Shops;