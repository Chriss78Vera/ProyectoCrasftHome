import React, {useState} from 'react'
import { useStateValue } from '../../actions/StateProvider';
import { actionTypes } from '../../actions/Reducer';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
} from 'antd';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Formulario = ({next}) => {
  const [{shippingData}, dispatch] = useStateValue();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const [autoCompleteResult] = useState([]);

 
  return (
    
    <Row justify="center">
        <Col span={12}>
        <h2 className="titleFac"> Ingreso de datos </h2>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish(data=>{
        dispatch({
          type: actionTypes.SET_SHIPPINGDATA,
          shippingData: data,
        });
      })}
      scrollToFirstError
    >
      <Form.Item
        
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


      <Form.Item
   
        name="Nombre"
        label="Nombre"
        rules={[
          {
            required: true,
            message: 'No ingreso su nombre',
            whitespace: true,
          },
        ]}
      >   
        <Input />
      </Form.Item>
      
      <Form.Item
     
        name="Apellido"
        label="Apellido"
        rules={[
          {
            required: true,
            message: 'No ingreso su apellido',
            whitespace: true,
          },
        ]}
      >   
        <Input />
      </Form.Item>
      
      <Form.Item
  
        name="Dirrecion"
        label="Dirrecion"
        rules={[
          {
            required: true,
            message: 'Ingrese su dirrecion',
            whitespace: true,
          },
        ]}
      >   
        <Input />
      </Form.Item>
      <Form.Item
       
        name="Celular"
        label="Celular"
        rules={[
          {
            required: true,
            message: 'Ingresa tu celular',
            whitespace: true,
          },
        ]}
      >   
        <Input/>
      </Form.Item>
      
    </Form>
    </Col>
    </Row>
  );
};
export default Formulario;