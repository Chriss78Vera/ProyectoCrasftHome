import React, { useState } from 'react';
import 'antd/dist/antd.css';
import MenuBar from './Menu';
import Foters from './foter';
import logo from '../../images/logo.png';
import { auth } from '../firebase';
import { useHistory } from 'react-router';
import {
    Form,
    Input,
    Row,
    Checkbox,
    Button,
    Layout,
  } from 'antd';

const { Header, Content } = Layout;



const SingUps = () => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
  
    const signup = (e) =>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email,password).then((auth) => {
        console.log(auth);
        if(auth){
          history.push("/");
        }
      }).catch(err=> alert(err.message))
    }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
<Layout >
    {/* MENU */}

            <Header className="head">
                <div className="logo" />
                    {/* NAVBAR */}
                       <MenuBar/>
            </Header>

    {/* FORMULARIO */}
            <Content className="contentRegister">
                <Row gutter={[8,8]}  justify='center'>
              <div className="site-layout-content">
                <img src={logo} className="imageR" />
              <Form
      
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >




    {/* EMAIL */}
        <Form.Item
            value={email}
            onChange={e=>setEmail(e.target.value)}
            name="email"
            label="E-mail"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input />
        </Form.Item>



    {/* Contraseña */}
        <Form.Item
            value={password}
            onChange={e=>setPassword(e.target.value)}
            name="password"
            label="Password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>


    {/* Confirmar Contraseña */}
        <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }

                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),
            ]}
        >
        <Input.Password />
      </Form.Item>



    {/* NickName */}
        <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
            {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
            },
            ]}
        >
            <Input />
        </Form.Item>

    {/* Requisitos */}
      <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
            {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
            ]}
           
        >
            <Checkbox>
            I have read the <a href="">agreement</a>
            </Checkbox>
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit" onClick={signup}>
            Register
            </Button>
      </Form.Item>
    </Form>
 
        </div>
</Row>
    {/* Footer */}
        </Content>
              <div className="footer">
                    {/* Footer */}
                      <Foters/>
                  </div>
        </Layout>

  );
};
export default SingUps;