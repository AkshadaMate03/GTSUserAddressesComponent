import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import LoginComponent from '../../components/common/LoginComponent';

import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
  ButtonGroup
} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import backgroundImage from '../assets/img/icons/common/4.svg';
import {Card, CardBody,CardText, FormControl, FormLabel,FormCheck } from 'react-bootstrap';

class UserAddressesPage extends React.Component {
 
    componentDidMount() {
      //document.documentElement.scrollTop = 0;
      //document.scrollingElement.scrollTop = 0;
      //this.refs.main.scrollTop = 0;
    }
    constructor(props) {
     
        super(props);
        this.state = {
         
          roleSuccess:''
        };
        }
     
              render() {
                return (
                <div>
                  
                        <Header />
                        <UserAddressesComponent/>
                        <Footer/>
                </div>
               )
        }
}
export default UserAddressesPage;

  
  
