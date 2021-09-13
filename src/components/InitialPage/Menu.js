import React from 'react';
import { Link } from 'react-router-dom';
import { Badge,Layout, Typography, Button } from 'antd';
import logo from '../../images/logo.png';
import '../../styles/crasftdesing.css';
import {  ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import { useStateValue } from  '../../actions/StateProvider';
import { auth } from '../firebase';
import { actionTypes } from '../../actions/Reducer';
import { useHistory } from 'react-router';


const { Title } = Typography;
const { Header} = Layout;



function MenuBar (){
    const [{basket, user}, dispatch ] = useStateValue();
    const history = useHistory()
  
    const handleAuth= ()=>{
      if(user){
        auth.signOut();
        dispatch({
          type: actionTypes.EMPTY_BASKET,
          basket: [],
        });
        history.push("/")
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        history.push("/")
      }
    }
  
    return( 
      <Layout >
      <Header style={{backgroundColor: "white"}}>
      <Title level={2} style={{float: 'left', padding: '10px'}}> <Link to ="/"><img src= {logo}/></Link></Title>
      <Title level={5} style={{float: 'left'}}>
           </Title>
           <div style={{  float: "right"}}> 
           <Link to= "/Login">
             <Button onClick={handleAuth}
              style={{ backgroundColor:'#ece4ff',
               fontSize: "20px",
                fontFamily: 
                'Courier New'
                }} 
                size="large">
                   {user ? "Desconectarse" : "Iniciar Sesión"} 
                </Button>
              </Link>
            </div>
           <div style={{  float: "right", padding: "9px", paddingRight: "50px"}} > <Link to ="/shopcar"> <Badge count={basket?.length}><ShoppingCartOutlined style={{fontSize: "35px", color: '#3ae21f'}} /></Badge>  </Link> </div>
           <div style={{  float: "right", fontSize: "20px", paddingRight: "30px", fontFamily: 'Courier New'}} >{user? user.email: "Usuario"} <UserOutlined style={{fontSize: "25px", paddingLeft: '5px', paddingRight: '15px', color: '#3ae21f'}} /> </div>
      </Header>
    </Layout>     
    )
}

export default MenuBar;