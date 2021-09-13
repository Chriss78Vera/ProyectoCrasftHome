import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../styles/crasftdesing.css';
import accounting from "accounting";
import { Button , Modal} from 'antd';
import { useStateValue } from  '../../actions/StateProvider';
import { getBasketTotal } from "../../actions/Reducer";
import FacTura from './Fac';

import { DollarOutlined} from '@ant-design/icons';



const Totals = () => {
    const [visible, setVisible] = useState(false);
    const [{basket}, dispatch ] = useStateValue();
    return(
     <div >
        <h3 className="baskets" >Productos agregados: {basket?.length}</h3>
        <h3 className="baskets">{accounting.formatMoney(getBasketTotal(basket))}</h3>
      
        <Button icon= {<DollarOutlined style={{fontSize: "20px"}} />}   style={{ backgroundColor:'#3ae21f', fontSize: "20px", fontFamily: 'Courier New'}} shape="round"  type= "primary"  size="large"  onClick={() => setVisible(true)} > Facturar   </Button>
    
        <Modal
        title="PROCESO FACTURACION"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p><FacTura/></p>
        </Modal>
    </div>
    )
}

export default Totals