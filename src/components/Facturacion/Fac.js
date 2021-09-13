import React from 'react';
import { Steps, Button, message} from 'antd';
import 'antd/dist/antd.css';
import '../../styles/crasftdesing.css';
import Formulario from './DataUsers';
import CheckProduct from './Review';
const { Step } = Steps;

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} 

const steps = [
    {
      title: 'Datos para la factura',
      content: <Formulario/>,
    },
    {
      title: 'Revisión final',
      content: <CheckProduct/>,
    },
    {
      title: 'Factura',
      content: <h1>Tu factura ha sido generada exitosamanete el número de tu factura es #{numeroAleatorio(1,10000)} se enviará los datos correspondientes al correo registrado en los datos de factura! </h1>,
    },
  ];
 

const FacTura= () => {
    const [current, setCurrent] = React.useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    }; 
    

    return (
      <>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Compra realizada con exito! Disfruta tus productos!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    );
  };
export default FacTura;