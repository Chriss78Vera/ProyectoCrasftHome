import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import MenuBar from './Menu';
import Foters from './foter';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox,Layout, Row, Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../../images/logo.png';
import { auth } from '../firebase';
import { useHistory } from 'react-router';
const { Header, Content} = Layout;

export default function SingIns() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const singin = (e) =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then((auth) => {
    
        history.push("/");
     
    }).catch(err=> alert(err.message))
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };     
    return(
        <div>
        <Layout className="layout">
            <Header className="head">
                <div className="logo" />
                    {/* NAVBAR */}
                       <MenuBar/>
            </Header>
        
          <Row  Row gutter={[8,8]}  justify="center">
            <Col xs={24} sm={12} >
                <Content className="contentLogin">
                    <div className="site-layout-content">
                        {/* INICIAR SESSION */}
                        <img src={logo} className="imageS" /> 
                          <Form
                                  name="normal_login"
                                  className="login-form"
                                  initialValues={{
                                    remember: true,
                                  }}
                                  onFinish={onFinish}
                                >
                                  {/* USUARIO */}
                                  <Form.Item
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                    name="username"
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Please input your Username!',
                                      },
                                    ]}
                                  >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                  </Form.Item>

                                  {/* CONTRASEÑA */}
                                  <Form.Item
                                  value={password}
                                  onChange={e=>setPassword(e.target.value)}
                                    name="password"
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Please input your Password!',
                                      },
                                    ]}
                                  >
                                    <Input
                                      prefix={<LockOutlined className="site-form-item-icon" />}
                                      type="password"
                                      placeholder="Password"
                                    />
                                  </Form.Item>
                                  <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                      <Checkbox>Recuerdame</Checkbox>
                                    </Form.Item>
                                  </Form.Item>

                                  <Form.Item>
                                    
                                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={singin}>
                                      Iniciar Sesión
                                    </Button>
                                  </Form.Item>

                                  <Form.Item>
                                  <Link to="/Register"> No tienes cuenta? Registrate</Link>
                                  </Form.Item>
                          </Form>
                    </div>  
                           
                        </Content> 
                </Col>
                <Col xs={24} sm={12}>
                      <Content className="contentLogins" ></Content> 
                </Col>
          </Row>
              <div className="footer">
                    {/* Footer */}
                      <Foters/>
                  </div>
          </Layout>
        </div>
    );
}
