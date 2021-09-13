import React from 'react';
import { Row, Col} from 'antd';
import '../../styles/crasftdesing.css';
import { FacebookOutlined, InstagramOutlined, MailOutlined} from '@ant-design/icons';


function Foters(){
    return (
        <Row gutter={[16,16]}>
          <Col xs={24} sm={12} md={8} >
                    <FacebookOutlined 
                    className="FB"
                    />
                    <h5 className="text"> CrasftHome </h5>
          </Col>
          <Col xs={24} sm={12} md={8}>
                    <InstagramOutlined 
                    className="IG"
                    />
                    <h5 className="text"> @CrasftHome </h5>
            </Col>
            <Col xs={24} sm={12} md={8}>
                    <MailOutlined 
                    className="EM"
                    />
                    <h5 className="text" > crasfthome@gmail.com </h5>
                
            </Col>
          <Col xs={24}> 
                <div className="copy" >
                © 2021 Copyright RocketSoftware
                </div>
    
          </Col>
        </Row>
    )
}

export default Foters;