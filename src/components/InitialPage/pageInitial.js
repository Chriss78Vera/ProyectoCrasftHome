import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col} from 'antd';
import '../../styles/crasftdesing.css';
import GRID from '../Products/cardgrid';
import MenuBar from './Menu';
import Foters from './foter';
import Carousels from './Carousel';
const { Header, Content } = Layout;


function InitialPage (){
    return(
      <div>
        <Layout className="layout">
            <Header className="head">
                <div className="logo" />
                    {/* NAVBAR */}
                       <MenuBar/>
            </Header>
            <Content className="content" >
              <Row justify="center">
                <Col span={24}>
                <Carousels/>
                </Col>
                
              <div>
                  {/* GRID PARA LAS VISTAS DE LOS PRODUCTOS */}
                    <GRID/>
              </div>
             
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

export default InitialPage;